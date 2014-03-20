(function() {
  "use strict";
  window.GOVUK = window.GOVUK || {};

  function WordsToAvoidHighlighter(options) {
    var $el = $(options.el);

    $el.highlightTextarea({
      color: '#FFB040',
      caseSensitive: false,
      words: [
        "agenda",
        "advancing",
        "collaborate",
        "combating",
        "commit",
        "countering",
        "deliver",
        "deploy",
        "dialogue",
        "disincentivise",
        "drive",
        "drive out",
        "empower",
        "facilitate",
        "focusing",
        "foster",
        "going forward",
        "impact",
        "initiate",
        "in order to",
        "key",
        "land",
        "leverage",
        "liaise",
        "one-stop shop",
        "overarching",
        "pledge",
        "progress",
        "promote",
        "ring fencing",
        "robust",
        "slimming down",
        "streamline",
        "strengthening",
        "tackling",
        "transforming",
        "utilise",
      ]
    });

    var updateHighlightedWordsCount = function() {
      var numberOfHighlightedWords = $(".highlighter span.highlight").length;

      if(numberOfHighlightedWords) {
        $("#js-words-to-avoid").show();
        $("#js-words-to-avoid-count").html(numberOfHighlightedWords);
      } else {
        $("#js-words-to-avoid").hide();
      }
    }
    $el.bind('keypress', updateHighlightedWordsCount);
    updateHighlightedWordsCount();
  }

  GOVUK.WordsToAvoidHighlighter = WordsToAvoidHighlighter;
}());
