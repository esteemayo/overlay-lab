import Xmark from '../icons/Xmark';
import Popup from '../popup';
import Button from '../button/Button';

import DocsExample from './DocsExample';
import DocsSection from './DocsSection';
import CodePreview from '../codePreview/CodePreview';

import { highlightCode } from '@/lib/highlight';

const apiCode = `<Popup>
  <Popup.Trigger asChild>
    <button type='button'>Open</button>
  </Popup.Trigger>

  <Popup.Content variant='modal'>
    <Popup.Header>
      <Popup.Title>Title</Popup.Title>
      <Popup.Close>X</Popup.Close>
    </Popup.Header>

    <Popup.Body>Content</Popup.Body>
  </Popup.Content>
</Popup>`;

const typeCode = `type PopupStackItem = {
  id: string;
};`;

const overlayCode = `useOverlay(containerRef, {
  isOpen,
  onClose,
});`;

const focusTrapCode = `useFocusTrap(containerRef, isOpen);`;

const focusableCode = `const focusable = container.querySelectorAll(
  'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
);`;

const DocsContent = async () => {
  const highlightedOverlay = await highlightCode(overlayCode);
  const highlightedApi = await highlightCode(apiCode);
  const highlightedFocusTrapCode = await highlightCode(focusTrapCode);
  const highlightedType = await highlightCode(typeCode);
  const highlightedFocusableCode = await highlightCode(focusableCode);

  return (
    <main className='docs-content'>
      <DocsSection id='introduction' title='Introduction'>
        <p>
          A headless popup system designed for building accessible, composable
          overlays such as modals, drawers and sidebars.
        </p>

        <p>
          It provides a unified API for managing multiple overlays while
          maintaining full control over styling and layout.
        </p>
      </DocsSection>

      <DocsSection id='why' title='Why This Exists'>
        <p>
          Most modal implementations rely on isolated boolean state and tightly
          coupled UI, which limits composability and makes it difficult to
          support more advanced overlay patterns.
        </p>

        <p>
          As application grow, these limitations lead to fragmented logic,
          inconsistent behavior, and poor accessibility support.
        </p>

        <p>
          This system introduce a headless, stack-driven architecture that
          centralizes overlay state and enables scalable composition of modals,
          drawers, and sidebars through a unified API.
        </p>
      </DocsSection>

      <DocsSection id='architecture' title='Architecture'>
        <p>
          The system is structured around two core layers: a global stack
          manager and isolated popup instances.
        </p>

        <p>
          A top-level provider maintains a centralized stack that tracks active
          popups, enabling proper layering and control of multiple overlays.
        </p>

        <p>
          Each popups instance establishes its own context boundary, allowing
          triggers and content components to communicate without relying on prop
          drilling or shared global state.
        </p>

        <pre style={{ marginBottom: 20 }}>
          {`PopupProvider (global stack)
   ↓
Popup (instance boundary)
   ↓         
Trigger / Content / Close`}
        </pre>

        <p>
          This separation ensures predictable behavior, scalability, and
          composability across different overlay types.
        </p>
      </DocsSection>

      <DocsSection id='decisions' title='Design Decision'>
        <ul>
          <li>
            <strong>Stack-based state over boolean flags:</strong> Enables
            multiple popups to coexist and ensures only the topmost overlay is
            interactive at any time
          </li>

          <li>
            <strong>Compound component pattern:</strong> Provides a declarative
            API where related components share state implicitly through context.
          </li>

          <li>
            <strong>Headless architecture:</strong> Separates behavior from
            presentation, allowing full control over styling and layout without
            constraints.
          </li>

          <li>
            <strong>Context isolation per instance:</strong> Ensures each popup
            operates independently, preventing unintended interactions between
            multiple instances.
          </li>

          <li>
            <strong>Portal-based rendering:</strong> Avoids stacking and layout
            conflicts by rendering overlays outside the normal DOM hierarchy.
          </li>
        </ul>
      </DocsSection>

      <DocsSection id='stack' title='Stack System'>
        <p style={{ marginBottom: 20 }}>
          Popups are managed using a Last-In-First-Out (LIFO) stack model.
        </p>

        <CodePreview code={typeCode} highlighted={highlightedType} />

        <ul style={{ marginTop: 20 }}>
          <li>Opening a popup pushes it onto the stack.</li>
          <li>Closing removes it from the stack.</li>
          <li>The topmost popup is always the active one.</li>
        </ul>
      </DocsSection>

      <DocsSection id='variants' title='Variants'>
        <p>
          Variants control layout and animation behavior while sharing the same
          underlying logic.
        </p>

        <pre
          style={{ marginBottom: 20 }}
        >{`"modal" | "drawer-left" | "drawer-right"`}</pre>

        <p>
          Each variant applies different positioning and transitions using
          state-driven styles.
        </p>
      </DocsSection>

      <DocsSection id='overlay' title='Overlay Behavior'>
        <p>
          The system includes built-in overlay handling to ensure a consistent
          and accessible user experience across all popup variants.
        </p>

        <h3>Scroll Lock</h3>

        <p>
          When a popup is open, background scrolling is disabled to prevent
          interaction with underlying content.
        </p>

        <h3>Overlay Click to Close</h3>

        <p>
          Clicking outside the popup content (on the overlay) will close the
          active popup.
        </p>

        <p>
          This behavior is scoped to the topmost popup in the stack, preventing
          unintended closures when multiple overlays are present.
        </p>

        <CodePreview code={overlayCode} highlighted={highlightedOverlay} />

        <p style={{ marginTop: 20 }}>
          The overlay logic is encapsulated in a reusable hook, which handles
          outside clicks and escape key interactions while respecting the popup
          stack.
        </p>

        <h3>Escape Key Handling</h3>

        <p>
          Pressing the escape key closes the topmost popup, maintaining
          predictable and accessible interaction patterns.
        </p>
      </DocsSection>

      <DocsSection id='api' title='API'>
        <CodePreview code={apiCode} highlighted={highlightedApi} />
      </DocsSection>

      <DocsSection id='keyboard' title='Keyboard Interactions'>
        <p>
          The system provides built-in keyboard support to ensure accessibility
          and predictable interaction across all popup variants.
        </p>

        <h3>Focus Trap</h3>

        <p>
          When a popup is active, focus is contained within the overlay,
          preventing interaction with elements outside of it.
        </p>

        <p>
          This ensures users navigating via keyboard can cycle through
          interactive elements without leaving the popup context.
        </p>

        <div style={{ marginBottom: 20 }}>
          <CodePreview
            code={focusTrapCode}
            highlighted={highlightedFocusTrapCode}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <CodePreview
            code={focusableCode}
            highlighted={highlightedFocusableCode}
          />
        </div>

        <p>
          The focus trap is implemented using a custom hook that manages
          keyboard navigation and ensures focus loops between the first and last
          focusable elements.
        </p>

        <h3>Escape Key</h3>

        <p>
          Pressing the Escape key closes the topmost popup in the stack,
          ensuring consistent and expected behavior.
        </p>

        <h3 style={{ marginTop: 20 }}>Tab Navigation</h3>

        <ul>
          <li>
            <strong>
              <kbd>Esc</kbd>
            </strong>{' '}
            - closes the topmost popup
          </li>

          <li>
            <strong>
              <kbd>Tab</kbd>
            </strong>{' '}
            - moves focus forward
          </li>

          <li>
            <strong>
              <kbd>Shift</kbd> + <kbd>Tab</kbd>
            </strong>{' '}
            - moves focus backward
          </li>
        </ul>
      </DocsSection>

      <DocsSection id='examples' title='Live Examples'>
        <DocsExample
          title='Modal Example'
          files={[
            {
              filename: 'index.tsx',
              code: `<Popup>
  <Popup.Trigger>Open Modal</Popup.Trigger>

  <Popup.Content variant='modal'>
    <Popup.Header>
      <Popup.Title>Modal</Popup.Title>
      <Popup.Close>X</Popup.Close>
    </Popup.Header>

    <Popup.Body>Modal Content</Popup.Body>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'as-child.tsx',
              code: `<Popup>
  <Popup.Trigger asChild>
    <button type='button'>Open Modal</button>
  </Popup.Trigger>

  <Popup.Content variant='modal'>
    <Popup.Header>
      <Popup.Title>Modal</Popup.Title>

      <Popup.Close asChild>
        <button type='button'>X</button>
      </Popup.Close>
    </Popup.Header>

    <Popup.Body>Modal Content</Popup.Body>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'styles.scss',
              code: `.popup {
  position: fixed;
  inset: 0;
  z-index: 5000;              
  padding: 1rem;
  background-color: #0d1117;
  border-radius: 0.8rem;
               
  &__overlay {
    width: 100%;
    height: 100%;
    background-color: #11224090;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 300ms ease;

    display: flex;
  }
}`,
            },
          ]}
        >
          <Popup>
            <Popup.Trigger asChild>
              <Button type='button' label='Open Modal' variant='submit' />
            </Popup.Trigger>

            <Popup.Content variant='modal'>
              <Popup.Header>
                <Popup.Title>Modal</Popup.Title>

                <Popup.Close>
                  <Xmark />
                </Popup.Close>
              </Popup.Header>

              <Popup.Body>
                <div style={{ padding: 20 }}>Hello from Modal</div>
              </Popup.Body>
            </Popup.Content>
          </Popup>
        </DocsExample>

        <DocsExample
          title='Drawer Left Example'
          files={[
            {
              filename: 'index.tsx',
              code: `<Popup>
  <Popup.Trigger>Open</Popup.Trigger>
  
  <Popup.Header>
    <Popup.Title>Open</Popup.Title>
    <Popup.Close>X</Popup.Close>
  </Popup.Header>
    
  <Popup.Content variant='drawer-left'>
    <Popup.Body>Sidebar Content</Popup.Body>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'as-child.tsx',
              code: `<Popup>
  <Popup.Trigger asChild>
    <button type='button'>Open Sidebar</button>
  </Popup.Trigger>

  <Popup.Content variant='drawer-left'>
    <Popup.Header>
      <Popup.Title>Menu</Popup.Title>

      <Popup.Close asChild>
        <button type='button'>X</button>
      </Popup.Close>
    </Popup.Header>

    <Popup.Body>Sidebar Content</Popup.Body>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'styles.scss',
              code: `.popup {
  position: fixed;
  inset: 0;
  z-index: 5000;              
  padding: 1rem;
  background-color: #0d1117;
  border-radius: 0.8rem;
               
  &__overlay {
    width: 100%;
    height: 100%;
    background-color: #11224090;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 300ms ease;

    display: flex;
  }
}`,
            },
          ]}
        >
          <Popup>
            <Popup.Trigger asChild>
              <Button
                type='button'
                label='Open Left Sidebar'
                variant='submit'
              />
            </Popup.Trigger>

            <Popup.Content variant='drawer-left'>
              <Popup.Header>
                <div
                  style={{
                    width: '100%',
                    padding: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Popup.Title>Menu</Popup.Title>

                  <Popup.Close>
                    <Xmark />
                  </Popup.Close>
                </div>
              </Popup.Header>

              <Popup.Body>
                <div style={{ padding: 20 }}>Sidebar Content</div>
              </Popup.Body>
            </Popup.Content>
          </Popup>
        </DocsExample>

        <DocsExample
          title='Drawer Right Example'
          files={[
            {
              filename: 'index.tsx',
              code: `<Popup>
  <Popup.Trigger>Open</Popup.Trigger>
  
  <Popup.Header>
    <Popup.Title>Open</Popup.Title>
    <Popup.Close>X</Popup.Close>
  </Popup.Header>
    
  <Popup.Content variant='drawer-right'>
    <Popup.Body>Sidebar Content</Popup.Body>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'as-child.tsx',
              code: `<Popup>
  <Popup.Trigger asChild>
    <button type='button'>Open Sidebar</button>
  </Popup.Trigger>

  <Popup.Content variant='drawer-right'>
    <Popup.Header>
      <Popup.Title>Menu</Popup.Title>

      <Popup.Close asChild>
        <button type='button'>X</button>
      </Popup.Close>
    </Popup.Header>

    <Popup.Body>Sidebar Content</Popup.Body>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'styles.scss',
              code: `.popup {
  position: fixed;
  inset: 0;
  z-index: 5000;              
  padding: 1rem;
  background-color: #0d1117;
  border-radius: 0.8rem;
               
  &__overlay {
    width: 100%;
    height: 100%;
    background-color: #11224090;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 300ms ease;

    display: flex;
  }
}`,
            },
          ]}
        >
          <Popup>
            <Popup.Trigger asChild>
              <Button
                type='button'
                label='Open Right Sidebar'
                variant='submit'
              />
            </Popup.Trigger>

            <Popup.Content variant='drawer-right'>
              <Popup.Header>
                <div
                  style={{
                    width: '100%',
                    padding: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Popup.Title>Menu</Popup.Title>

                  <Popup.Close>
                    <Xmark />
                  </Popup.Close>
                </div>
              </Popup.Header>

              <Popup.Body>
                <div style={{ padding: 20 }}>Sidebar Content</div>
              </Popup.Body>
            </Popup.Content>
          </Popup>
        </DocsExample>

        <DocsExample
          title='Stacked Popup Example'
          files={[
            {
              filename: 'index.tsx',
              code: `<Popup>
  <Popup.Trigger>Open First</Popup.Trigger>

  <Popup.Content variant='modal'>
    <Popup.Header>
     <Popup.Title>First Modal</Popup.Title>
     <Popup.Close>X</Popup.Close>
    </Popup.Header>

    <Popup.Trigger>Open Second</Popup.Trigger>

    <Popup.Content variant='modal'>
     <Popup.Body>Nested Popup</Popup.Body>
    </Popup.Content>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'as-child.tsx',
              code: `<Popup>
  <Popup.Trigger asChild>
    <button type='button'>Open First</button>
  </Popup.Trigger>
   
  <Popup.Content variant='modal'>
    <Popup.Header>
      <Popup.Title>First Modal</Popup.Title>

      <Popup.Close asChild>
        <button type='button'>X</button>
      </Popup.Close>
    </Popup.Header>

    <Popup.Trigger asChild>
      <button type='button'>Open Second</button>
    </Popup.Trigger>

    <Popup.Content variant='modal'>
      <Popup.Header>
        <Popup.Title>Second Modal</Popup.Title>

        <Popup.Close asChild>
          <button type='button'>X</button>
        </Popup.Close>
      </Popup.Header>

      <Popup.Body>Nested Popup</Popup.Body>
    </Popup.Content>
  </Popup.Content>
</Popup>`,
            },
            {
              filename: 'notes.md',
              code: `# Stack Behavior
  ## How it works

  - Each popup is pushed onto a global stack
  - The stack follows a Last-In-First-Out (LIFO) model
  - Only the topmost popup is interactive

  ## Why this matters

  - Prevents interaction conflicts between overlays
  - Ensures predictablelayering behavior
  - Keeps background popups mounted but inactive

  ## Mental Model

  Think of popups like a stack of cards

  The last opened popup sits on top and controls user interaction.
`,
            },
          ]}
        >
          <Popup>
            <Popup.Trigger asChild>
              <Button type='button' label='Open First' variant='submit' />
            </Popup.Trigger>

            <Popup.Content variant='modal'>
              <Popup.Header>
                <Popup.Title>First</Popup.Title>

                <Popup.Close>
                  <Xmark />
                </Popup.Close>
              </Popup.Header>

              <Popup.Description>First popup</Popup.Description>

              <Popup.Body>
                <div style={{ marginBottom: 20 }}>Popup Content</div>
              </Popup.Body>

              <Popup>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Popup.Trigger asChild>
                    <Button
                      type='button'
                      label='Open Second'
                      variant='submit'
                    />
                  </Popup.Trigger>
                </div>

                <Popup.Content variant='modal'>
                  <Popup.Header>
                    <Popup.Title>Second</Popup.Title>

                    <Popup.Close>
                      <Xmark />
                    </Popup.Close>
                  </Popup.Header>

                  <Popup.Body>Nested Popup</Popup.Body>
                </Popup.Content>
              </Popup>
            </Popup.Content>
          </Popup>
        </DocsExample>
      </DocsSection>
    </main>
  );
};

export default DocsContent;
