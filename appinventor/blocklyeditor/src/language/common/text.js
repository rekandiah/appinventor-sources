/**
 * Visual Blocks Language
 *
 * Copyright 2012 Massachusetts Institute of Technology. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly, modified for App Inventor
 * @author andrew.f.mckinney@gmail.com (Andrew F. McKinney)
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.text = {
  // Text value.
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.appendTitle('\u201C');
    this.appendTitle(new Blockly.FieldTextInput(''), 'TEXT');
    this.appendTitle('\u201D');
    this.setOutput(true, String);
    this.setTooltip('A text string.');
  }
};

Blockly.Language.text_join = {
  // Create a string made up of any number of elements of any type.
  // TODO: (Andrew) Make this handle multiple arguments.
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, String);
    this.appendTitle('join');
    this.appendInput(Blockly.INPUT_VALUE, 'ADD0', String);
    this.appendInput(Blockly.INPUT_VALUE, 'ADD1', String);
    this.setTooltip('Appends all of the arguments to form a single text string.\n' +
        'If there are no arguments, makes an empty text.');
  }
};

Blockly.Language.text_length = {
  // String length.
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, Number);
    this.appendTitle('length');
    this.appendInput(Blockly.INPUT_VALUE, 'VALUE', String);
    this.setTooltip('Returns number of characters (including spaces)\n' +
        'in the provided text.');
  }
};

Blockly.Language.text_isEmpty = {
  // Is the string null?
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, Boolean);
    this.appendTitle(Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY);
    this.appendInput(Blockly.INPUT_VALUE, 'VALUE', String);
    this.setTooltip('Returns true if the length of the\n' +
        'text is 0, false otherwise.');
  }
};

Blockly.Language.text_compare = {
  // Compare two texts
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.setOutput(true, Boolean);
    this.appendTitle('compare texts');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT1', String);
    var dropdown = new Blockly.FieldDropdown(this.OPERATORS);
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT2', String).appendTitle(dropdown, 'OP');
    this.setInputsInline(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getTitleValue('OP');
      return Blockly.Language.text_compare.TOOLTIPS[mode];
    });
  }
};

Blockly.Language.text_compare.OPERATORS =
  [['<', 'LT'],
   ['=', 'EQUAL'],
   ['>', 'GT']];

Blockly.Language.text_compare.TOOLTIPS = {
  LT : 'Test whether text1 is lexicographically less than text2.\n' +
      'if one text is the prefix of the other, the shorter text is\n' +
      'considered smaller. Uppercase characters precede lowercase characters.',
  EQUAL : 'Test whether text strings are identical, ie., have the same\n' +
      'characters in the same order. This is different from ordinary =\n' +
      'in the case where the text strings are numbers: 123 and 0123 are =\n' +
      'but not text =.',
  GT : 'Reports whether text1 is lexicographically greater than text2.\n' +
      'if one text is the prefix of the other, the shorter text is considered smaller.\n' +
      'Uppercase characters precede lowercase characters.'
};

Blockly.Language.text_trim = {
  // trim string
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, String);
    this.appendTitle('trim');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String);
    this.setTooltip('Returns a copy of it text string arguments with any\n' +
        'leading or trailing spaces removed.');
  }
};

Blockly.Language.text_changeCase = {
  // Change capitalization.
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, String);
    var dropdown = new Blockly.FieldDropdown(this.OPERATORS);
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String).appendTitle(dropdown, 'OP');
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getTitleValue('OP');
      return Blockly.Language.text_changeCase.TOOLTIPS[mode];
    });
  }
};

Blockly.Language.text_changeCase.OPERATORS = 
  [[ 'upcase', 'UPCASE' ],
    [ 'downcase', 'DOWNCASE' ]];

Blockly.Language.text_changeCase.TOOLTIPS = {
  UPCASE : 'Returns a copy of its text string argument converted to uppercase.',
  DOWNCASE : 'Returns a copy of its text string argument converted to lowercase.'
};

Blockly.Language.text_starts_at = {
  // return index of first occurrence.
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, Number);
    this.appendTitle('starts at');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String).appendTitle('text');
    this.appendInput(Blockly.INPUT_VALUE, 'PIECE', String).appendTitle('piece');
    this.setTooltip('Returns the starting index of the piece in the text.\n' +
        'where index 1 denotes the beginning of the text. Returns 0 if the\n' +
        'piece is not in the text.');
  }
};

Blockly.Language.text_contains = {
  // Is text contained in
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.setOutput(true, Boolean);
    this.appendTitle('contains');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String).appendTitle('text');
    this.appendInput(Blockly.INPUT_VALUE, 'PIECE', String).appendTitle('piece');
    this.setTooltip('Tests whether the piece is contained in the text.');
  }
};

Blockly.Language.text_split = {
    // Splits at first
    // TODO: (Hal) Make this handle type change for the dropdown.
    category: Blockly.LANG_CATEGORY_TEXT,
    helpUrl: '',
    init: function() {
      this.setColour(160);
      this.setOutput(true, Array);
      var dropdown = new Blockly.FieldDropdown(function() {
          return Blockly.Language.text_split.OPERATORS;
        });
      this.appendTitle(dropdown, 'OP');
      this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String).appendTitle('text');
      this.appendInput(Blockly.INPUT_VALUE, 'AT', [String, Array]).appendTitle('at');
      var thisBlock = this;
      this.setTooltip(function() {
        var mode = thisBlock.getTitleValue('OP');
        return Blockly.Language.text_split.TOOLTIPS[mode];
      });
    }
  };

Blockly.Language.text_split.OPERATORS = 
  [['split at first', 'SPLITATFIRST'],
    ['split at first of any', 'SPLITATFIRSTOFANY'],
    ['split', 'SPLIT'],
    ['split at any', 'SPLITATANY']];

Blockly.Language.text_split.TOOLTIPS = {
  SPLITATFIRST : 'Splits the text into two pieces separated by the first occurrence of \'at\'.\n'
      + 'Returns a two-element list with the two pieces. Returns a one-element list with original\n'
      + 'text if \'at\' is not contained in the text.',
  SPLITATFIRSTOFANY : 'Splits the text into two pieces separated by the first\n'
      + 'occurrence of any of the elements in the list \'at\'\n'
      + 'and returns these pieces. Returns a one-element list with original\n'
      + 'text if \'at\' is not contained in the text.',
  SPLIT : 'Split the text into pieces separated by the\n'
      + 'occurrences of \'at\' and return the list of these pieces.\n'
      + 'Returns a one-element list with the original\n'
      + 'text if \'at\' is not contained in the text.',
  SPLITATANY : 'Split the text into pieces separated by the\n'
      + 'occurrences of any of the elements in the list \'at\' and\n'
      + 'return the list of these pieces. Returns a one-element list\n'
      + 'with the original text if \'at\' is not contained in the text.'
};

Blockly.Language.text_split_at_spaces = {
  // Split at spaces
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.setOutput(true, Array);
    this.appendTitle('split at spaces');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String);
    this.setTooltip('Split the text into pieces separated by spaces.');
  }
};

Blockly.Language.text_segment = {
  // Create text segment
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.setOutput(true, String);
    this.appendTitle('segment');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String).appendTitle('text');
    this.appendInput(Blockly.INPUT_VALUE, 'START', Number).appendTitle('start');
    this.appendInput(Blockly.INPUT_VALUE, 'LENGTH', Number).appendTitle('length');
    this.setTooltip('Extracts the segment of the given length from the given text\n' +
        'starting from the given text starting from the given position. Position\n' +
        '1 denotes the beginning of the text.');
  }
};

Blockly.Language.text_replace_all = {
  // Replace all occurrences of text
  category : Blockly.LANG_CATEGORY_TEXT,
  helpUrl : '',
  init : function() {
    this.setColour(160);
    this.setOutput(true, String);
    this.appendTitle('replace all');
    this.appendInput(Blockly.INPUT_VALUE, 'TEXT', String).appendTitle('text');
    this.appendInput(Blockly.INPUT_VALUE, 'SEGMENT', String).appendTitle('segment');
    this.appendInput(Blockly.INPUT_VALUE, 'REPLACEMENT', String).appendTitle('replacement');
    this.setTooltip('Returns a new text obtained by replacing all occurrences\n' +
        'of the segment with the replacement.');
  }
};