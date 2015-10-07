// LICENSE : MIT
"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/2.2.2";
var tester = new TextLintTester();
tester.run("2.2.2.算用数字と漢数字の使い分け", rule, {
    valid: [
        "1億2805 万人",
        "3つのボタン",
        "第3回大会",
        "4種類"
    ],
    invalid: [
        {
            text: "一億百十万人",
            errors: [
                {message: "一億百十万人 => 1億110万人"}
            ]
        },
        {
            text: "百八つのボタン",
            errors: [
                {message: "百八つのボタン => 108つのボタン"}
            ]
        },
        {
            text: "第三回大会",
            errors: [
                {message: "第三回大会 => 第3回大会"}
            ]
        }
    ]
});

tester.run("2.2.2.算用数字と漢数字の使い分け", rule, {
    valid: [
        "世界一",
        "世界１",// 大文字
        "世界2位",// 数えられる数字
        "一時的",
        "一部分",
        "第三者",
        "一種の",
        "一部の",
        "一番に",
        "数百倍",
        "2倍",
        "二次関数",
        "四捨五入",
        "四角い",
        "五大陸"
    ],
    invalid: [
        {
            text: "世界1",
            errors: [
                {message: "世界1 => 世界一"}
            ]
        },
        {
            text: "1部の",
            errors: [
                {message: "1部の => 一部の"}
            ]
        },
        {
            text: "1番に",
            errors: [
                {message: "1番に => 一番に"}
            ]
        },
        {
            text: "数100倍",
            errors: [
                {message: "数100倍 => 数百倍"}
            ]
        }
    ]
});
