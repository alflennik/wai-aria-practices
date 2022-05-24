---
# This is a generated file
title: "Sortable Table Example"
ref: /ARIA/apg/example-index/table/sortable-table

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/table/sortable-table.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/table/sortable-table

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/16'>View issues related to this example</a></p>            <p>Page last updated: 24 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/sortable-table.css" rel="stylesheet" />

<script src="js/sortable-table.js"></script>


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
          src="{{ '/content-images/wai-aria-practices/img/table.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
    
    <p>
      The example below illustrates an implementation of the <a href="{{ '/ARIA/apg/patterns/table/' | relative_url }}">table design pattern</a> for a table with sortable rows.
      The example uses HTML table markup for all elements of the table structure, e.g., cells, rows, column headers, and caption.
      The <code>aria-sort</code> attribute is set on the column header of the currently sorted column, and the header text of sortable columns is wrapped in a <code>button</code> element.
      One column, the <q>Address</q> column is not sortable.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="table.html">Table Example</a>: A table constructed using ARIA roles to convey  table semantics.</li>
      <li><a href="../grid/dataGrids.html">Data Grid Examples</a>: Three example implementations of grid that include features relevant to presenting tabular information, such as content editing, sort, and column hiding.</li>
    </ul>

    <section>
      <h2>Example Option</h2>
      <label>
        <input type="checkbox"
          value="show-unsorted-icon"
          aria-describedby="show-unsorted-icon-desc">
        Display sort icon in headers of sortable columns that are not sorted
      </label>
      <p id="show-unsorted-icon-desc">
        Adds a diamond shaped icon (e.g. <q>♢</q>) to the header of each column that can be sorted but is not currently sorted.
        Some sortable tables add an icon to unsorted columns to help users distinguish sortable columns from columns that cannot be sorted.
        It is <em>important</em> that the shape of the unsorted icon differ in more than just color and size from the icons that indicate sort direction (e.g. '▼' and '▲') so  people with visual impairments can easily distinguish them.
      </p>
    </section>

    <section>
      <div class="example-header">
        <h2 id="ex_label">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <div class="table-wrap"><table class="sortable">
          <caption>
            Students currently enrolled in WAI-ARIA 101
            <span class="sr-only">, column headers with buttons are sortable.</span>
          </caption>
          <thead>
            <tr>
              <th>
                <button>
                  First Name
                  <span aria-hidden="true"></span>
                </button>
              </th>
              <th aria-sort="ascending">
                <button>
                  Last Name
                  <span aria-hidden="true"></span>
                </button>
              </th>
              <th>
                <button>
                  Company
                  <span aria-hidden="true"></span>
                </button>
              </th>
              <th class="no-sort">Address</th>
              <th class="num">
                <button>
                  Favorite Number
                  <span aria-hidden="true"></span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fred</td>
              <td>Jackson</td>
              <td>Canary, Inc.</td>
              <td>123 Broad St.</td>
              <td class="num">56</td>
            </tr>
            <tr>
              <td>Sara</td>
              <td>James</td>
              <td>Cardinal, Inc.</td>
              <td>457 First St.</td>
              <td class="num">7</td>
            </tr>
            <tr>
              <td>Ralph</td>
              <td>Jefferson</td>
              <td>Robin, Inc.</td>
              <td>456 Main St.</td>
              <td class="num">513</td>
            </tr>
            <tr>
              <td>Nancy</td>
              <td>Jensen</td>
              <td>Eagle, Inc.</td>
              <td>2203 Logan Dr.</td>
              <td class="num">3.5</td>
            </tr>
          </tbody>
        </table></div>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <ul>
        <li>
          To help screen reader users understand the purpose of the buttons in the column headers, an off-screen description of the sort functionality of the buttons is appended to the caption text.
          The description is added to the caption instead of to each button to prevent repetitious verbosity that could interfere with understanding of the column titles.
        </li>
        <li>To enhance perceivability when operating the sort buttons, visual keyboard focus and hover are styled using CSS <code>:hover</code> and <code>:focus</code> pseudo-classes:
          <ul>
            <li>To make it easier to perceive when a button has focus, the focus indicator encompasses both the column label and sort direction icon.</li>
            <li>The cursor is changed to a pointer when hovering over the button to help people identify it as an interactive element.</li>
            <li>To make it easier to perceive that clicking either the column label or the sort direction icon will sort the table, hover styles the button and icon in the same way that focus does.</li>
            <li>To make activating sort easier for people with visual and movement impairments who are using a pointing device, the click target is maximized not only by making both the column label and sort icon clickable but also by using CSS positioning and sizing to make the button fill the entire header cell area.</li>
          </ul>
        </li>
        <li>To ensure the sorting direction icons have sufficient contrast with the background when high contrast settings invert colors, character entities (e.g. '▼' and '▲') are used to indicate the sorting direction.</li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label">Keyboard Support</h2>
      <p>Not applicable: The only interactive elements are HTML button elements, and all their keyboard functionality is provided by browsers.</p>
    </section>

    <section>
      <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
      <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="th-aria-sort">
            <td></td>
            <th scope="row"><code>aria-sort="<em>value</em>"</code></th>
            <td><code>th</code></td>
            <td>
              <ul>
                <li>Set on the currently sorted column.  When the sorted column is changed, the <code>aria-sort</code> attribute is removed and set on the newly sorted column.</li>
                <li>A value of &quot;<code>ascending</code>&quot; indicates the data cells in the column are sorted in ascending order.</li>
                <li>A value of &quot;<code>descending</code>&quot; indicates the data cells in the column are sorted in descending order.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="span-aria-hidden">
            <td></td>
            <th scope="row"><code>aria-hidden="true"</code></th>
            <td><code>span</code></td>
            <td>Removes the character entities used for sort icons from the accessibility tree to prevent them from being included in the accessible name of the sort buttons.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2>Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>
          CSS:
          <a href="css/sortable-table.css" type="text/css">sortable-table.css</a>
        </li>
        <li>
          Javascript:
          <a href="js/sortable-table.js" type="text/javascript">sortable-table.js</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="sc1_label">HTML Source Code</h2>
      <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
      <pre><code id="sc1"></code></pre>
      <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
      <script>
        sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
        sourceCode.make();
      </script>
    </section>
  </div>
  

</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>