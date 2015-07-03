/*jslint nomen: true */
/*globals exports, require */
var border = require('./border');

exports.createParagraph = function (text) {
    'use strict';
    if (text === undefined) {
        text = '';
    }

    var paragraph = {
        'w:p': [{
            _attr: {}
        }, {
            'w:pPr': [{
                _attr: {}
            }]
        }, {
            'w:r': [{
                'w:t': text
            }]
        }],
        addText: function (run) {
            var paragraphs = this['w:p'];
            paragraphs.splice(paragraphs.length - 1, 0, run);
            return this;
        },
        heading1: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Heading1'
                    }
                }]
            });
            return this;
        },
        heading2: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Heading2'
                    }
                }]
            });
            return this;
        },
        heading3: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Heading3'
                    }
                }]
            });
            return this;
        },
        title: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Title'
                    }
                }]
            });
            return this;
        },
        center: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:jc': [{
                    _attr: {
                        'w:val': 'center'
                    }
                }]
            });
            return this;
        }

    };
    
    border.setBorderMethods(paragraph);

    //paragraph.borderBottom = border.borderBottom;
    return paragraph;
};