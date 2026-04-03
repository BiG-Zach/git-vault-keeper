/**
 * enforce-semantic-html
 *
 * Warns when a <div> that is the direct child of a component's return
 * statement contains heading elements (h1–h6). In blog pages and components,
 * <article>, <section>, <aside>, or <figure> would be more appropriate.
 *
 * Severity: warn (never blocks the build).
 */

const HEADING_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

/** @type {import('eslint').Rule.RuleModule} */
export const enforceSemanticHtml = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Prefer semantic HTML elements over <div> when a div directly wraps heading elements in blog files.',
      recommended: false,
    },
    schema: [],
    messages: {
      preferSemantic:
        '<div> wraps heading element(s) — consider <article>, <section>, <aside>, or <figure> for better semantics.',
    },
  },

  create(context) {
    return {
      JSXElement(node) {
        const opening = node.openingElement;

        // Only check <div> elements
        if (
          opening.name.type !== 'JSXIdentifier' ||
          opening.name.name !== 'div'
        ) {
          return;
        }

        // Check if this div is the direct child of a return statement
        const parent = node.parent;
        const isReturnChild =
          parent.type === 'ReturnStatement' ||
          (parent.type === 'JSXExpressionContainer' &&
            parent.parent?.type === 'ReturnStatement') ||
          // Also catch: return ( <> <div>... )  — fragment wrapping
          (parent.type === 'JSXFragment' &&
            parent.parent?.type === 'ReturnStatement');

        if (!isReturnChild) return;

        // Check if any direct JSX child is a heading element
        const hasHeadingChild = node.children.some(
          (child) =>
            child.type === 'JSXElement' &&
            child.openingElement.name.type === 'JSXIdentifier' &&
            HEADING_TAGS.has(child.openingElement.name.name),
        );

        if (hasHeadingChild) {
          context.report({
            node: opening,
            messageId: 'preferSemantic',
          });
        }
      },
    };
  },
};
