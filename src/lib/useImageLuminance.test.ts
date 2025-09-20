import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';

import { useImageLuminance } from './useImageLuminance';

type ImageOnLoad = ((this: MockImage, ev: Event) => unknown) | null;
type ImageOnError = ((this: MockImage, ev: Event) => unknown) | null;

class MockImage {
  public width = 2;
  public height = 2;
  public crossOrigin: string | null = null;
  public onload: ImageOnLoad = null;
  public onerror: ImageOnError = null;
  private _src = '';

  set src(value: string) {
    this._src = value;

    setTimeout(() => {
      this.width = 1;
      this.height = 1;
      this.onload?.(new Event('load'));
    }, 0);
  }

  get src() {
    return this._src;
  }
}

describe('useImageLuminance', () => {
  const originalImage = global.Image;
  const originalOffscreen = globalThis.OffscreenCanvas;

  beforeEach(() => {
    vi.useRealTimers();
    global.Image = MockImage as unknown as typeof Image;
  });

  afterEach(() => {
    global.Image = originalImage;
    globalThis.OffscreenCanvas = originalOffscreen as typeof OffscreenCanvas;
    vi.restoreAllMocks();
  });

  it('falls back to a DOM canvas when OffscreenCanvas is unavailable', async () => {
    (globalThis as { OffscreenCanvas?: typeof OffscreenCanvas | undefined }).OffscreenCanvas = undefined;

    const mockContext = {
      drawImage: vi.fn(),
      getImageData: vi.fn(() => ({
        data: new Uint8ClampedArray([255, 255, 255, 255])
      }))
    };

    const getContextSpy = vi
      .spyOn(HTMLCanvasElement.prototype, 'getContext')
      .mockReturnValue(mockContext as unknown as CanvasRenderingContext2D);
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(Element.prototype, 'remove');

    const { result } = renderHook(() => useImageLuminance('/fallback.png', 200));

    await waitFor(() => {
      expect(result.current.ready).toBe(true);
    });

    expect(getContextSpy).toHaveBeenCalled();
    expect(mockContext.drawImage).toHaveBeenCalledTimes(1);
    expect(mockContext.getImageData).toHaveBeenCalledWith(0, 0, 1, 1);
    expect(result.current.luminance).toBeCloseTo(255);
    expect(result.current.isBright).toBe(true);
    expect(appendSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();
  });

  it('uses OffscreenCanvas when available', async () => {
    const mockContext = {
      drawImage: vi.fn(),
      getImageData: vi.fn(() => ({
        data: new Uint8ClampedArray([0, 0, 0, 255])
      }))
    };

    class MockOffscreenCanvas {
      constructor(public width: number, public height: number) {}

      getContext() {
        return mockContext;
      }
    }

    globalThis.OffscreenCanvas = MockOffscreenCanvas as unknown as typeof OffscreenCanvas;

    const htmlCanvasSpy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext');

    const { result } = renderHook(() => useImageLuminance('/offscreen.png', 10));

    await waitFor(() => {
      expect(result.current.ready).toBe(true);
    });

    expect(htmlCanvasSpy).not.toHaveBeenCalled();
    expect(mockContext.drawImage).toHaveBeenCalledTimes(1);
    expect(mockContext.getImageData).toHaveBeenCalledWith(0, 0, 1, 1);
    expect(result.current.luminance).toBeCloseTo(0);
    expect(result.current.isBright).toBe(false);
  });
});
