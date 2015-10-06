// LICENSE : MIT
"use strict";
/*

4.1.3. ピリオド(.)、カンマ(,)
ピリオド(.)とカンマ(,)は「半角」で表記します。
桁区切りのカンマ(,)、小数点のピリオド(.)、箇条書きの数字に 付加するピリオド(.)としても使用します。
和文の句読点としては使用しません。「1.2.2 ピリオド(.)とカンマ(,)」を 参照してください
 */
import {isUserWrittenNode} from "./util/node-util";
export default function punctuationMark(context) {
    let {Syntax, RuleError, report, getSource} = context;
    return {
        [Syntax.Str](node){
            if (!isUserWrittenNode(node, context)) {
                return;
            }
            let text = getSource(node);
            // 和文. はエラー
            if (/[亜-熙ぁ-んァ-ヶ]\./.test(text)) {
                report(node, new RuleError("和文の句読点としてはピリオドを使用しません。"));
            }
        }
    };
}