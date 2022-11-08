---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "Slider (Multi-Thumb) Pattern"
ref: /ARIA/apg/patterns/slider-multithumb/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/patterns/slider-multithumb/slider-multithumb-pattern.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/slider-multithumb/

sidebar: true



# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<meta charset="UTF-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title>Slider (Multi-Thumb) Pattern</title>

<script src="../../shared/js/highlight.pack.js"></script>
<script src="../../shared/js/app.js"></script>
<script src="../../shared/js/skipto.js"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/shared/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    

<script>
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>

    <div>
      

      <section id="about">
        <h2>About This Pattern</h2>
        <p>
          A multi-thumb slider implements the <a href="../slider/">Slider Pattern</a> but includes two or more thumbs, often on a single rail.
          Each thumb sets one of the values in a group of related values.
          For example, in a product search, a two-thumb slider could be used to enable users to set the minimum and maximum price limits for the search.
          In many two-thumb sliders, the thumbs are not allowed to pass one another, such as when the slider sets the minimum and maximum values for a range.
          For example, in a price range selector, the maximum value of the thumb that sets the lower end of the range is limited by the current value of the thumb that sets the upper end of the range.
          Conversely, the minimum value of the upper end thumb is limited by the current value of the lower end thumb.
          However, in some multi-thumb sliders, each thumb sets a value that does not depend on the other thumb values.
        </p>
        <p class="warning">
          Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
          To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
          This is a new convention that may not be fully implemented by some assistive technologies.
          Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
        </p>
      </section>

      <section id="examples" class="examples-section"><img alt="" 
      src="{{ '/content-images/wai-aria-practices/img/slider-multithumb.svg' | relative_url }}"
    >
        <h2>Example</h2>
        <p><a href="examples/slider-multithumb/">Horizontal Multi-Thumb Slider Example</a>: Demonstrates a two-thumb slider for picking a price range for a hotel reservation.</p>
      </section>

      <section id="keyboard_interaction">
        <h2>Keyboard Interaction</h2>
        <ul>
          <li>
            Each thumb is in the page tab sequence and has the keyboard interactions described in the
            <a href="../slider/slider-pattern.html#keyboard_interaction">Slider Pattern</a>.
          </li>
          <li>
            The tab order remains constant regardless of thumb value and visual position within the slider.
            For example, if the value of a thumb changes such that it moves past one of the other thumbs, the tab order does not change.
          </li>
        </ul>
      </section>

      <section id="roles_states_properties">
        <h2>WAI-ARIA Roles, States, and Properties</h2>
        <ul>
          <li>Each element serving as a focusable slider thumb has role <a class="role-reference" href="#slider">slider</a>.</li>
          <li>Each slider element has the <a class="property-reference" href="#aria-valuenow">aria-valuenow</a> property set to a decimal value representing the current value of the slider.</li>
          <li>Each slider element has the <a class="property-reference" href="#aria-valuemin">aria-valuemin</a> property set to a decimal value representing the minimum allowed value of the slider.</li>
          <li>Each slider element has the <a class="property-reference" href="#aria-valuemax">aria-valuemax</a> property set to a decimal value representing the maximum allowed value of the slider.</li>
          <li>When the range (e.g. minimum and/or maximum value) of another slider is dependent on the current value of a slider, the values of <a class="property-reference" href="#aria-valuemin">aria-valuemin</a> or <a class="property-reference" href="#aria-valuemax">aria-valuemax</a> of the dependent sliders are updated when the value changes.</li>
          <li>
            If a value of <code>aria-valuenow</code> is not user-friendly, e.g., the day of the week is represented by a number, the <a class="property-reference" href="#aria-valuetext">aria-valuetext</a> property is set to a string that makes the slider value understandable, e.g., &quot;Monday&quot;.
          </li>
          <li>
            If a slider has a visible label, it is referenced by <a href="#aria-labelledby" class="property-reference">aria-labelledby</a> on the slider element.
            Otherwise, the slider element has a label provided by <a href="#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            If a slider is vertically oriented, it has <a class="property-reference" href="#aria-orientation">aria-orientation</a> set to <code>vertical</code>.
            The default value of <code>aria-orientation</code> for a slider is <code>horizontal</code>.
          </li>
        </ul>
      </section>
    </div>
  
</div>
<script 
  src="{{ '/ARIA/apg/shared/js/skipto.js' | relative_url }}"
></script>