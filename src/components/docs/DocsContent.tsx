import Popup from '../popup';
import Button from '../button/Button';

import DocsExample from './DocsExample';
import DocsSection from './DocsSection';

const DocsContent = () => {
  return (
    <main className='docs-content'>
      <DocsSection id='introduction' title='Introduction'>
        <p>
          A headless popup system supporting modals, drawer and stacked
          overlays.
        </p>
      </DocsSection>

      <DocsSection id='architecture' title='Architecture'>
        <pre>
          {`PopupProvider → global stack
Popup → instance boundary
Trigger/Content → controlled by instance`}
        </pre>
      </DocsSection>

      <DocsSection id='stack' title='Stack System'>
        <p>Popups are managed using a LIFO stack.</p>
      </DocsSection>

      <DocsSection id='variants' title='Variants'>
        <pre>{`"modal" | "drawer-left" | "drawer-right"`}</pre>
      </DocsSection>

      <DocsSection id='api' title='API'>
        <pre>
          {`<Popup>
  <Popup.Trigger />
  <Popup.Content />
</Popup>`}
        </pre>
      </DocsSection>

      <DocsSection id='examples' title='Live Examples'>
        <DocsExample title='Modal Example'>
          <Popup>
            <Popup.Trigger asChild>
              <Button type='button' label='Open Modal' variant='submit' />
            </Popup.Trigger>

            <Popup.Content>
              <div style={{ padding: 20 }}>Hello from Modal</div>
            </Popup.Content>
          </Popup>
        </DocsExample>

        <DocsExample title='Drawer Left Example'>
          <Popup>
            <Popup.Trigger asChild>
              <Button
                type='button'
                label='Open Left Sidebar'
                variant='submit'
              />
            </Popup.Trigger>

            <Popup.Content variant='drawer-left'>
              <div style={{ padding: 20 }}>Sidebar Content</div>
            </Popup.Content>
          </Popup>
        </DocsExample>

        <DocsExample title='Drawer Right Example'>
          <Popup>
            <Popup.Trigger asChild>
              <Button
                type='button'
                label='Open Right Sidebar'
                variant='submit'
              />
            </Popup.Trigger>

            <Popup.Content variant='drawer-right'>
              <div style={{ padding: 20 }}>Sidebar Content</div>
            </Popup.Content>
          </Popup>
        </DocsExample>

        <DocsExample title='Stacked Popup Example'>
          <Popup>
            <Popup.Trigger asChild>
              <Button type='button' label='Open First' variant='submit' />
            </Popup.Trigger>

            <Popup.Content>
              <Popup>
                <Popup.Trigger asChild>
                  <Button type='button' label='Open Second' variant='submit' />
                </Popup.Trigger>

                <Popup.Content variant='modal'>Nested Popup</Popup.Content>
              </Popup>
            </Popup.Content>
          </Popup>
        </DocsExample>
      </DocsSection>
    </main>
  );
};

export default DocsContent;
