---
# This is a generated file
title: "Editor Menubar Example"
ref: /ARIA/apg/example-index/menubar/menubar-editor

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/menubar/menubar-editor.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/menubar/menubar-editor

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/5'>View issues related to this example</a></p>            <p>Page last updated: 24 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/menubar-editor.css" rel="stylesheet" />
<script src="js/menubar-editor.js" type="text/javascript"></script>
<script src="js/style-manager.js" type="text/javascript"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/ARIA/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/ARIA/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/ARIA/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/menu.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
    
    <p>
      The following example demonstrates using the
      <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">menubar design pattern</a>
      to provide access to editing actions for a text area.
      Each item in the menubar identifies a category of text formatting actions that can be executed from its submenu.
      The submenus demonstrate <code>menuitemradio</code> and <code>menuitemcheckbox</code> elements.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="examples/toolbar/toolbar.html">Toolbar Example</a>: A text formatting toolbar that uses roving tabindex to manage focus and contains several types of controls, including toggle buttons, radio buttons, a menu button, a spin button, a checkbox, and a link.</li>
      <li><a href="menubar-navigation.html">Navigation Menubar Example</a>: A menubar that presents site navigation menus.</li>
    </ul>

  <section id="code-ex-1">
    <div class="example-header">
      <h2 id="ex1_label">Example</h2>
    </div>
    <div role="separator" id="ex1_start_sep" aria-labelledby="ex1_start_sep ex1_label" aria-label="Start of"></div>
    <div id="ex1">
      <div class="menubar-editor">
        <ul role="menubar" aria-label="Text Formatting">
          <li role="none">
            <span role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0">Font<span aria-hidden="true"></span></span>
            <ul role="menu" data-option="font-family" aria-label="Font">
              <li role="menuitemradio" aria-checked="true"><span aria-hidden="true"></span>Sans-serif</li>
              <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Serif</li>
              <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Monospace</li>
              <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Fantasy</li>
            </ul>
          </li>
          <li role="none">
            <span role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="-1">Style/Color<span aria-hidden="true"></span></span>
            <ul role="menu" aria-label="Style/Color">
              <li role="none">
                <ul role="group" data-option="font-style" aria-label="Font Style">
                  <li role="menuitemcheckbox" data-option="font-bold" aria-checked="false"><span aria-hidden="true"></span>Bold</li>
                  <li role="menuitemcheckbox" data-option="font-italic" aria-checked="false"><span aria-hidden="true"></span>Italic</li>
                </ul>
              </li>
              <li role="separator"></li>
              <li role="none">
                <ul role="group" data-option="font-color" aria-label="Text Color">
                  <li role="menuitemradio" aria-checked="true"><span aria-hidden="true"></span>Black</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Blue</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Red</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Green</li>
                </ul>
              </li>
              <li role="separator"></li>
              <li role="none">
                <ul role="group" data-option="text-decoration" aria-label="Text Decoration">
                  <li role="menuitemradio" aria-checked="true"><span aria-hidden="true"></span>None</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Overline</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Line-through</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Underline</li>
                </ul>
              </li>
            </ul>
          </li>

          <li role="none">
            <span role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="-1">Text Align<span aria-hidden="true"></span></span>
            <ul role="menu" data-option="text-align" aria-label="Text Align">
              <li role="menuitemradio" aria-checked="true"><span aria-hidden="true"></span>Left</li>
              <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Center</li>
              <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Right</li>
              <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Justify</li>
            </ul>
          </li>

          <li role="none">
            <span role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="-1">Size<span aria-hidden="true"></span></span>
            <ul role="menu" aria-label="Size">
              <li role="menuitem" data-option="font-smaller" aria-disabled="false">Smaller</li>
              <li role="menuitem" data-option="font-larger"  aria-disabled="false">Larger</li>
              <li role="separator"></li>
              <li role="none">
                <ul role="group" data-option="font-size" aria-label="Font Sizes">
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>X-Small</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Small</li>
                  <li role="menuitemradio" aria-checked="true"><span aria-hidden="true"></span>Medium</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>Large</li>
                  <li role="menuitemradio" aria-checked="false"><span aria-hidden="true"></span>X-Large</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <textarea style="font-size: medium; font-family: sans-serif" aria-label="Text Sample"
        >
            Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

            Now we are engaged in a great civil war, testing whether that nation, or any nation, so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

            But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow, this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us, that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion, that we here highly resolve that these dead shall not have died in vain, that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.
            </textarea>
      </div>

      <p>
        <a href="https://en.wikipedia.org/wiki/Gettysburg,_Pennsylvania">More information on
          Gettysburg Address</a>
      </p>


    </div>
    <div role="separator" id="ex1_end_sep" aria-labelledby="ex1_end_sep ex1_label" aria-label="End of"></div>
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <ul>
      <li>
        Disabled menu items are demonstrated in the font size menu.
        If the font is set to its smallest size, the <q>Smaller</q> menu item is disabled.
        Similarly, if the font is set to its largest size, the <q>Larger</q> menu item is disabled.
      </li>
      <li>Users of assistive technologies can identify the currently active format options because they are represented by menu item radio and menu item checkbox elements that have a checked state.</li>
      <li>To prevent the character entities that visually represent The down arrow and checked icons from being announced by screen readers, they are hidden from the accessible name computation with the <code>aria-hidden</code> attribute.</li>
      <li>To help communicate that the arrow keys are available for directional navigation within the menubar and its submenus, a border is added to the menubar container when focus is within the menubar.</li>
      <li>
        Like most desktop menubars, submenus open on mouse hover over a parent item in the menubar only if another submenu is already open.
        That is, if all submenus are closed, a click on a parent menu item is required to display a submenu.
        Minimizing automatic popups triggered by hover makes exploring with a screen magnifier easier.
      </li>
      <li>
        In general, moving focus in response to mouse hover is avoided in accessible widgets; it causes unexpected context changes for keyboard users.
        However, like desktop menubars, there are two conditions in this example menubar where focus moves in response to hover in order to help maintain context for users who use both keyboard and mouse:
        <ul>
          <li>After a parent menu item in the menubar has been activated and the user hovers over a different parent item in the menubar, focus will follow hover.</li>
          <li>When a submenu is open and the user hovers over an item in the submenu, focus follows hover.</li>
        </ul>
      </li>
      <li>To support operating system high contrast settings, focus is highlighted by adding and removing a border around the menu item with focus.</li>
    </ul>
  </section>

  <section>
    <h2 id="kbd_label">Keyboard Support</h2>
    <h3 id="kbd1_label">Menubar</h3>
    <div class="table-wrap"><table aria-labelledby="kbd1_label kbd_label" class="def">
      <thead>
        <tr>
          <th>Key</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="menubar-key-space-and-enter">
          <th>
            <kbd>Space</kbd><br><kbd>Enter</kbd>
          </th>
          <td>Opens submenu and moves focus to first item in the submenu.</td>
        </tr>
        <tr data-test-id="menubar-key-escape">
          <th>
            <kbd>Escape</kbd>
          </th>
          <td>
            If a submenu is open, closes it. Otherwise, does nothing.
          </td>
        </tr>
        <tr data-test-id="menubar-key-right-arrow">
          <th>
            <kbd>Right Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the next item in the menubar.</li>
              <li>If focus is on the last item, moves focus to the first item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menubar-key-left-arrow">
          <th>
            <kbd>Left Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the previous item in the menubar.</li>
              <li>If focus is on the first item, moves focus to the last item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menubar-key-down-arrow">
          <th>
            <kbd>Down Arrow</kbd>
          </th>
          <td>Opens submenu and moves focus to first item in the submenu.</td>
        </tr>
        <tr data-test-id="menubar-key-up-arrow">
          <th>
            <kbd>Up Arrow</kbd>
          </th>
          <td>Opens submenu and moves focus to last item in the submenu.</td>
        </tr>
        <tr data-test-id="menubar-key-home">
          <th>
            <kbd>Home</kbd>
          </th>
          <td>Moves focus to first item in the menubar.</td>
        </tr>
        <tr data-test-id="menubar-key-end">
          <th>
            <kbd>End</kbd>
          </th>
          <td>Moves focus to last item in the menubar.</td>
        </tr>
        <tr data-test-id="menubar-key-character">
          <th>
            <kbd>Character</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to next item in the menubar having a name that starts with the typed character.</li>
              <li>If none of the items have a name starting with the typed character, focus does not move.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table></div>

    <h3 id="kbd2_label">Submenu</h3>
    <div class="table-wrap"><table aria-labelledby="kbd2_label kbd_label" class="def">
      <thead>
        <tr>
          <th>Key</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="submenu-enter">
          <th>
            <kbd>Space</kbd><br><kbd>Enter</kbd>
          </th>
          <td>Activates menu item, causing action to be executed, e.g., bold text, change font. </td>
        </tr>
        <tr data-test-id="submenu-escape">
          <th>
            <kbd>Escape</kbd>
          </th>
          <td>
            <ul>
              <li>Closes submenu.</li>
              <li>Moves focus to parent menubar item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-right-arrow">
          <th>
            <kbd>Right Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Closes submenu.</li>
              <li>Moves focus to next item in the menubar.</li>
              <li>Opens submenu of newly focused menubar item, keeping focus on that parent menubar item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-left-arrow">
          <th>
            <kbd>Left Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Closes submenu.</li>
              <li>Moves focus to previous item in the menubar.</li>
              <li>Opens submenu of newly focused menubar item, keeping focus on that parent menubar item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-down-arrow">
          <th>
            <kbd>Down Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the next item in the submenu.</li>
              <li>If focus is on the last item, moves focus to the first item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-up-arrow">
          <th>
            <kbd>Up Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to previous item in the submenu.</li>
              <li>If focus is on the first item, moves focus to the last item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-home">
          <th>
            <kbd>Home</kbd>
          </th>
          <td>Moves focus to the first item in the submenu.</td>
        </tr>
        <tr data-test-id="submenu-end">
          <th>
            <kbd>End</kbd>
          </th>
          <td>Moves focus to the last item in the submenu.</td>
        </tr>
        <tr data-test-id="submenu-character">
          <th>
            <kbd>Character</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the next item having a name that starts with the typed character.</li>
              <li>If none of the items have a name starting with the typed character, focus does not move.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table></div>
    </section>

    <section>
      <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>
      <h3 id="rps1_label">Menubar</h3>
      <div class="table-wrap"><table aria-labelledby="rps1_label rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="menubar-role">
            <th scope="row">
              <code>menubar</code>
            </th>
            <td></td>
            <td>
              <code>ul</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a <code>menubar</code> container for a set of <code>menuitem</code> elements.</li>
                <li>Is not focusable because focus is managed using <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex.</a></li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menubar-aria-label">
            <td></td>
            <th scope="row">
              <code>aria-label=&quot;<em>string</em>&quot;
              </code>
            </th>
            <td>
              <code>ul</code>
            </td>
            <td>
              <ul>
                <li>
                  Defines an accessible name for the <code>menubar</code>.
                </li>
                <li>Helps assistive technology users understand the purpose of the menubar and
                  distinguish it from any other menubars or similar elements on the page.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-role">
            <th scope="row">
              <code>menuitem</code>
            </th>
            <td></td>
            <td>
              <code>span</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a menu item within the menubar.</li>
                <li>Accessible name comes from the text content.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="-1"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              Makes the <code>menuitem</code> element keyboard focusable but
              <strong>not</strong> part of the <kbd>Tab</kbd> sequence of the page.
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="0"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              <ul>
                <li>
                  Makes the <code>menuitem</code> element keyboard focusable and
                  part of the <kbd>tab</kbd> sequence of the page.
                </li>
                <li>
                  Only one <code>menuitem</code> in the <code>menubar</code> has <code>tabindex="0"</code>.
                </li>
                <li>
                  When the page loads, the first item in the menubar has <code>tabindex="0"</code>.
                </li>
                <li>
                  Focus is managed using <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-aria-haspopup">
            <td></td>
            <th scope="row">
              <code>aria-haspopup="true"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              Indicates that the <code>menuitem</code> has a submenu.
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-aria-expanded">
            <td></td>
            <th scope="row">
              <code>aria-expanded="true"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              <ul>
                <li>Indicates the submenu is open.</li>
                <li>
                  The visual appearance of the expanded state is synchronized with the <code>aria-expanded</code> value using CSS attribute selectors and hidden from screen readers with <code>aria-hidden="true"</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-aria-expanded">
            <td></td>
            <th scope="row">
              <code>aria-expanded="false"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              <ul>
                <li>Indicates the submenu is closed.</li>
                <li>
                  The visual appearance of the expanded state is synchronized with the <code>aria-expanded</code> value using CSS attribute selectors and hidden from screen readers with <code>aria-hidden="true"</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menubar-menuitem-aria-hidden">
            <td></td>
            <th scope="row">
              <code>aria-hidden="true"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              Removes the character entities used to represent the down arrow icons for parent menu items from the accessibility tree to prevent them from being included in the accessible name of the menu item.
            </td>
          </tr>
        </tbody>
      </table></div>
      <h3 id="rps2_label">Submenu</h3>
      <div class="table-wrap"><table aria-labelledby="rps2_label rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="menu-role">
            <th scope="row">
              <code>menu</code>
            </th>
            <td></td>
            <td>
              <code>ul</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a menu container for a set of menu items.</li>
                <li>Is not focusable because focus is managed using <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex.</a></li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menu-aria-label">
            <td></td>
            <th scope="row">
              <code>aria-label="<em>string</em>"</code>
            </th>
            <td>
              <code>ul</code>
            </td>
            <td>
              Defines an accessible name for the <code>menu</code>.
            </td>
          </tr>
          <tr data-test-id="submenu-menuitem-role">
            <th scope="row">
              <code>menuitem</code>
            </th>
            <td></td>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as an item in the submenu.</li>
                <li>Accessible name comes from the text content.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="submenu-menuitem-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="-1"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              Makes the item focusable but <strong>not</strong> part of the page <kbd>tab</kbd> sequence.
            </td>
          </tr>
          <tr data-test-id="submenu-menuitem-aria-disabled">
            <td></td>
            <th scope="row">
              <code>aria-disabled="false"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              Used on the font size "Smaller" and "Larger" options to indicate they are active.
            </td>
          </tr>
          <tr data-test-id="submenu-menuitem-aria-disabled">
            <td></td>
            <th scope="row">
              <code>aria-disabled="true"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              Used on the font size "Smaller" and "Larger" options to indicate one of the options is <strong>not</strong> active because the largest or smallest font has been selected.
            </td>
          </tr>
          <tr data-test-id="menuitemcheckbox-role">
            <th scope="row">
              <code>menuitemcheckbox</code>
            </th>
            <td></td>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a <code>menuitemcheckbox</code>.</li>
                <li>Accessible name comes from the text content.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menuitemcheckbox-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="-1"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              Makes the menuitemcheckbox focusable but <strong>not</strong> part of the page <kbd>tab</kbd> sequence.
            </td>
          </tr>
          <tr data-test-id="menuitemcheckbox-aria-checked">
            <td></td>
            <th scope="row">
              <code>aria-checked="true"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>
                  Indicates that the <code>menuitemcheckbox</code> is checked.
                </li>
                <li>
                  The visual appearance of the selected state is synchronized with the <code>aria-checked</code> value using CSS attribute selectors and hidden from screen readers with <code>aria-hidden="true"</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menuitemcheckbox-aria-checked">
            <td></td>
            <th scope="row">
              <code>aria-checked="false"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>
                  Indicates that the <code>menuitemcheckbox</code> is <strong>NOT</strong> checked.
                </li>
                <li>
                  The visual appearance of the selected state is synchronized with the <code>aria-checked</code> value using CSS attribute selectors and hidden from screen readers with <code>aria-hidden="true"</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menuitemcheckbox-aria-hidden">
            <td></td>
            <th scope="row">
              <code>aria-hidden="true"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              Removes the character entities that visually represent the checked state of <code>menuitemcheckbox</code> elements from the accessibility tree to prevent them from being included in the accessible name of the menu item.
            </td>
          </tr>
          <tr data-test-id="separator-role">
            <th scope="row">
              <code>separator</code>
            </th>
            <td></td>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a visual separator between groups of items within a menu, such as groups of <code>menuitemradio</code> or <code>menuitemcheckbox</code> elements.</li>
                <li>Is not focusable but may be perceivable by a screen reader user when using a reading cursor that does not depend on focus.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="group-role">
            <th scope="row">
              <code>group</code>
            </th>
            <td></td>
            <td>
              <code>ul</code>
            </td>
            <td>
              <ul>
                <li>
                  Identifies the element as a container for a set of <code>menuitemradio</code> elements.
                </li>
                <li>
                  Enables browsers to compute values of <code>aria-setsize</code> and <code>aria-posinset</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="group-aria-label">
            <td></td>
            <th scope="row">
              <code>aria-label="string"</code>
            </th>
            <td>
              <code>ul</code>
            </td>
            <td>
              Provides an accessible name for the group of menu items.
            </td>
          </tr>
          <tr data-test-id="menuitemradio-role">
            <th scope="row">
              <code>menuitemradio</code>
            </th>
            <td></td>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>
                  Identifies the element as a <code>menuitemradio</code> element.
                </li>
                <li>
                  When all items in a submenu are members of the same radio group,
                  the group is defined by the <code>menu</code> element; a <code>group</code> element is not necessary.
                </li>
                <li>
                  Accessible name is computed from the text content.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menuitemradio-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="-1"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              Makes the menuitemradio focusable but <strong>not</strong> part of the page <kbd>tab</kbd> sequence.
            </td>
          </tr>
          <tr data-test-id="menuitemradio-aria-checked">
            <td></td>
            <th scope="row">
              <code>aria-checked="true"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>
                  Indicates the  <code>menuitemradio</code> is checked.
                </li>
                <li>
                  The visual appearance of the selected state is synchronized with the <code>aria-checked</code> value using CSS attribute selectors and hidden from screen readers with <code>aria-hidden="true"</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menuitemradio-aria-checked">
            <td></td>
            <th scope="row">
              <code>aria-checked="false"</code>
            </th>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>
                  Indicates that  the <code>menuitemradio</code> is <strong>NOT</strong> checked.
                </li>
                <li>
                  The visual appearance of the selected state is synchronized with the <code>aria-checked</code> value using CSS attribute selectors and hidden from screen readers with <code>aria-hidden="true"</code>.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="menuitemradio-aria-hidden">
            <td></td>
            <th scope="row">
              <code>aria-hidden="true"</code>
            </th>
            <td>
              <code>span</code>
            </td>
            <td>
              Removes the character entities that visually represent the checked state of <code>menuitemradio</code> elements from the accessibility tree to prevent them from being included in the accessible name of the menu item.
            </td>
          </tr>
        </tbody>
    </table></div>
      <h3 id="rps3_label">Textarea</h3>
      <div class="table-wrap"><table aria-labelledby="rps3_label rps_label" class="data attributes">
      <thead>
        <tr>
          <th scope="col">Role</th>
          <th scope="col">Attribute</th>
          <th scope="col">Element</th>
          <th scope="col">Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="textarea-aria-label">
          <td></td>
          <th scope="row">
            <code>aria-label="<em>string</em>"</code>
          </th>
          <td>
            <code>textarea</code>
          </td>
          <td>
            Defines an accessible name for the <code>textarea</code>.
          </td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2>Javascript and CSS Source Code</h2>
    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/menubar-editor.css" type="tex/css">menubar-editor.css</a>
      </li>
      <li>
        Javascript: <a href="js/menubar-editor.js" type="text/javascript">menubar-editor.js</a>
      </li>
      <li>
        Javascript: <a href="js/style-manager.js" type="text/javascript">style-manager.js</a>
      </li>
    </ul>
  </section>

  <section>
    <h2 id="sc1_label">HTML Source Code</h2>
    <div id="sc1_start_sep" role="separator" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
    <pre><code id="sc1"></code></pre>
    <div id="sc1_end_sep" role="separator" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
    <script>
      sourceCode.add('sc1', 'ex1', 'ex1_label', 'css_js_files');
      sourceCode.make();
    </script>
  </section>
  </div>
  


</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>