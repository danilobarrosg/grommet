// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var GrommetDocument = require('grommet/components/Document');
var FullForm = require('./FullForm');

var FormDoc = React.createClass({

  render: function() {
    var inline = [
      "<Form>",
      "  <Header>...</Header>",
      "  <fieldset>",
      "    <FormField>",
      "      <label htmlFor=\"item1\">Item 1</label>",
      "      <input id=\"item1\" />",
      "    </FormField>",
      "    ...",
      "  </fieldset>",
      "  <Footer>...</Footer>",
      "</Form>"].join("\n");
    return (
      <GrommetDocument>
        <header>
          <h1>Form</h1>
          <p>A web form.</p>

          <pre><code className="html">{inline}</code></pre>
        </header>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>compact   true|false</code></dt>
          <dd>Whether to render the form in a compact style.</dd>
          <dt><code>onSubmit  {"{func}"}</code></dt>
          <dd>A function called when the user submits the form.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Regular</h3>
          <div className="example">
            <FullForm prefix="a-" />
          </div>
          <pre><code className="html">{"<Form> ..."}</code></pre>

          <h3>Compact</h3>
          <div className="example">
            <FullForm prefix="b-" compact={true}/>
          </div>
          <pre><code className="html">{"<Form compact={true}> ..."}</code></pre>

        </section>
      </GrommetDocument>
    );
  }
});

module.exports = FormDoc;
