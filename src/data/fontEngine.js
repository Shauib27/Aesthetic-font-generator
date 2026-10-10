/* Font engine extracted from the owner's own site (aesthetictextgenerator.com/wp-content/uploads/2026/07/font-generator-v10.html).
   Two bug fixes applied: bd() arg-order on 14 border styles, oldFonts 'H' duplicate mapping. */
/* Converted to ES module from the vanilla IIFE build. */
            var FONTS = [];

            /* ── CORE FUNCTIONS ── */
            function cv(t, u, l, d) {
                return [...t].map(function(c) {
                    var n = c.codePointAt(0);
                    return n >= 65 && n <= 90 && u ? String.fromCodePoint(u + n - 65) : n >= 97 && n <= 122 && l ? String.fromCodePoint(l + n - 97) : n >= 48 && n <= 57 && d ? String.fromCodePoint(d + n - 48) : c
                }).join('')
            }
            var fB = function(t) { return cv(t, 0x1D400, 0x1D41A, 0x1D7CE) };
            var fI = function(t) { return [...t].map(function(c) { var n = c.codePointAt(0); return c === 'h' ? '\u210E' : n >= 65 && n <= 90 ? String.fromCodePoint(0x1D434 + n - 65) : n >= 97 && n <= 122 ? String.fromCodePoint(0x1D44E + n - 97) : c }).join('') };
            var fBI = function(t) { return cv(t, 0x1D468, 0x1D482, 0x1D7CE) };
            var fSC = function(t) {
                var ue = [0x1D49C, 0x212C, 0x1D49E, 0x1D49F, 0x2130, 0x2131, 0x1D4A2, 0x210B, 0x2110, 0x1D4A5, 0x1D4A6, 0x2112, 0x2133, 0x1D4A9, 0x1D4AA, 0x1D4AB, 0x1D4AC, 0x211B, 0x1D4AE, 0x1D4AF, 0x1D4B0, 0x1D4B1, 0x1D4B2, 0x1D4B3, 0x1D4B4, 0x1D4B5],
                    le = [0x1D4B6, 0x1D4B7, 0x1D4B8, 0x1D4B9, 0x212F, 0x1D4BB, 0x210A, 0x1D4BD, 0x1D4BE, 0x1D4BF, 0x1D4C0, 0x1D4C1, 0x1D4C2, 0x1D4C3, 0x2134, 0x1D4C5, 0x1D4C6, 0x1D4C7, 0x1D4C8, 0x1D4C9, 0x1D4CA, 0x1D4CB, 0x1D4CC, 0x1D4CD, 0x1D4CE, 0x1D4CF],
                    e = {};
                for (var i = 0; i < 26; i++) { e[String.fromCharCode(65 + i)] = String.fromCodePoint(ue[i]); e[String.fromCharCode(97 + i)] = String.fromCodePoint(le[i]) }
                return [...t].map(function(c) { return e[c] || c }).join('')
            };
            var fBS = function(t) { return cv(t, 0x1D4D0, 0x1D4EA, null) };
            var fFK = function(t) {
                var e = { C: '\u212D', H: '\u210C', I: '\u2111', R: '\u211C', Z: '\u2128' };
                return [...t].map(function(c) { var n = c.codePointAt(0); return e[c] || (n >= 65 && n <= 90 ? String.fromCodePoint(0x1D504 + n - 65) : n >= 97 && n <= 122 ? String.fromCodePoint(0x1D51E + n - 97) : c) }).join('')
            };
            var fBK = function(t) { return cv(t, 0x1D56C, 0x1D586, null) };
            var fDS = function(t) {
                var e = { C: '\u2102', H: '\u210D', N: '\u2115', P: '\u2119', Q: '\u211A', R: '\u211D', Z: '\u2124' };
                return [...t].map(function(c) { var n = c.codePointAt(0); return e[c] || (n >= 65 && n <= 90 ? String.fromCodePoint(0x1D538 + n - 65) : n >= 97 && n <= 122 ? String.fromCodePoint(0x1D552 + n - 97) : n >= 48 && n <= 57 ? String.fromCodePoint(0x1D7D8 + n - 48) : c) }).join('')
            };
            var fSN = function(t) { return cv(t, 0x1D5A0, 0x1D5BA, 0x1D7E2) };
            var fSB = function(t) { return cv(t, 0x1D5D4, 0x1D5EE, 0x1D7EC) };
            var fSI = function(t) { return cv(t, 0x1D608, 0x1D622, null) };
            var fSBI = function(t) { return cv(t, 0x1D63C, 0x1D656, 0x1D7EC) };
            var fMN = function(t) { return cv(t, 0x1D670, 0x1D68A, 0x1D7F6) };
            var fVP = function(t) { return [...t].map(function(c) { var n = c.codePointAt(0); return n >= 33 && n <= 126 ? String.fromCodePoint(n + 0xFEE0) : c === ' ' ? '\u3000' : c }).join('') };
            var fSM = function(t) {
                var m = { a: '\u1D00', b: '\u0299', c: '\u1D04', d: '\u1D05', e: '\u1D07', f: '\uA730', g: '\u0262', h: '\u029C', i: '\u026A', j: '\u1D0A', k: '\u1D0B', l: '\u029F', m: '\u1D0D', n: '\u0274', o: '\u1D0F', p: '\u1D18', q: 'q', r: '\u0280', s: '\uA731', t: '\u1D1B', u: '\u1D1C', v: '\u1D20', w: '\u1D21', x: 'x', y: '\u028F', z: '\u1D22' };
                return [...t].map(function(c) { return m[c.toLowerCase()] || c }).join('')
            };
            var fBU = function(t) {
                var u = '\u24B6\u24B7\u24B8\u24B9\u24BA\u24BB\u24BC\u24BD\u24BE\u24BF\u24C0\u24C1\u24C2\u24C3\u24C4\u24C5\u24C6\u24C7\u24C8\u24C9\u24CA\u24CB\u24CC\u24CD\u24CE\u24CF',
                    l = '\u24D0\u24D1\u24D2\u24D3\u24D4\u24D5\u24D6\u24D7\u24D8\u24D9\u24DA\u24DB\u24DC\u24DD\u24DE\u24DF\u24E0\u24E1\u24E2\u24E3\u24E4\u24E5\u24E6\u24E7\u24E8\u24E9',
                    d = '\u24EA\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468';
                return [...t].map(function(c) { var n = c.codePointAt(0); return n >= 65 && n <= 90 ? u[n - 65] : n >= 97 && n <= 122 ? l[n - 97] : n >= 48 && n <= 57 ? d[n - 48] : c }).join('')
            };
            var fNB = function(t) { return [...t].map(function(c) { var n = c.codePointAt(0); return n >= 65 && n <= 90 ? String.fromCodePoint(0x1F150 + n - 65) : n >= 97 && n <= 122 ? String.fromCodePoint(0x1F150 + n - 97) : c }).join('') };
            var fSQ = function(t) { return [...t].map(function(c) { var n = c.codePointAt(0); return n >= 65 && n <= 90 ? String.fromCodePoint(0x1F130 + n - 65) : n >= 97 && n <= 122 ? String.fromCodePoint(0x1F130 + n - 97) : c }).join('') };
            var fSP = function(t) {
                var m = { a: '\u1D43', b: '\u1D47', c: '\u1D9C', d: '\u1D48', e: '\u1D49', f: '\u1DA0', g: '\u1D4D', h: '\u02B0', i: '\u2071', j: '\u02B2', k: '\u1D4F', l: '\u02E1', m: '\u1D50', n: '\u207F', o: '\u1D52', p: '\u1D56', q: 'q', r: '\u02B3', s: '\u02E2', t: '\u1D57', u: '\u1D58', v: '\u1D5B', w: '\u02B7', x: '\u02E3', y: '\u02B8', z: '\u1DBB' };
                return [...t].map(function(c) { return m[c.toLowerCase()] || c }).join('')
            };
            var fPA = function(t) {
                var l = '\u249C\u249D\u249E\u249F\u24A0\u24A1\u24A2\u24A3\u24A4\u24A5\u24A6\u24A7\u24A8\u24A9\u24AA\u24AB\u24AC\u24AD\u24AE\u24AF\u24B0\u24B1\u24B2\u24B3\u24B4\u24B5';
                return [...t].map(function(c) { var n = c.toLowerCase().codePointAt(0); return n >= 97 && n <= 122 ? l[n - 97] : c }).join('')
            };
            var fUD = function(t) {
                var m = { a: '\u0250', b: 'q', c: '\u0254', d: 'p', e: '\u01DD', f: '\u025F', g: '\u0183', h: '\u0265', i: '\u1D09', j: '\u027E', k: '\u029E', l: 'l', m: '\u026F', n: 'u', o: 'o', p: 'd', q: 'b', r: '\u0279', s: 's', t: '\u0287', u: 'n', v: '\u028C', w: '\u028D', x: 'x', y: '\u028E', z: 'z' };
                return [...t].map(function(c) { return m[c.toLowerCase()] || c }).reverse().join('')
            };
            var fMR = function(t) { return [...t].reverse().join('') };
            var fGK = function(t) {
                var m = { a: '\u03B1', b: '\u0432', c: '\u00A2', d: '\u010F', e: '\u0454', f: '\u0192', g: '\u0121', h: '\u0127', i: '\u0131', j: '\u029D', k: '\u049B', l: '\u2113', m: '\u043C', n: '\u03AE', o: '\u00F8', p: '\u03C1', q: 'q', r: '\u0157', s: '\u015F', t: '\u0167', u: '\u00FC', v: 'v', w: '\u03C9', x: 'x', y: '\u0447', z: 'z', A: '\u00C3', B: '\u0412', C: '\u00C7', D: '\u010E', E: '\u0404', F: 'F', G: '\u0120', H: '\u0126', I: '\u0130', J: 'J', K: '\u049A', L: '\u0141', M: '\u041C', N: '\u0389', O: '\u00D8', P: '\u03A1', Q: 'Q', R: '\u0156', S: '\u015E', T: '\u0166', U: '\u00DC', V: 'V', W: '\u03A9', X: 'X', Y: '\u0427', Z: 'Z' };
                return [...t].map(function(c) { return m[c] || c }).join('')
            };
            var fCQ = function(t) {
                var m = { a: '\u03B1', b: '\u0253', c: '\u00A2', d: '\u0503', e: '\u0454', f: '\u0284', g: '\u0260', h: '\u0266', i: '\u0E40', j: '\u029D', k: '\u049B', l: '\u029F', m: '\u0271', n: '\u014B', o: '\u03C3', p: '\u03C1', q: '\u0566', r: '\u027E', s: '\u0282', t: '\u019A', u: '\u0574', v: '\u028B', w: '\u03C9', x: '\u03C7', y: '\u10E7', z: '\u0291', A: '\u0104', B: '\u212C', C: '\u2102', D: '\uAB70', E: '\u0190', F: '\u2131', G: '\u0193', H: '\u0126', I: '\u2110', J: '\u029D', K: '\u0198', L: '\u2112', M: '\u2133', N: '\u0272', O: '\u01A0', P: '\u01A4', Q: '\u024A', R: '\u211D', S: '\u01A8', T: '\u01AC', U: '\u01B2', V: '\u2123', W: '\u019C', X: '\u0416', Y: '\u01B4', Z: '\u0176' };
                return [...t].map(function(c) { return m[c] || c }).join('')
            };
            var fKT = function(t) {
                var m = { a: '\u5352', b: '\u4E43', c: '\u531A', d: '\u5200', e: '\u4E47', f: '\u5343', g: 'g', h: '\u5344', i: '\u4E28', j: '\uFF7C', k: '\u049A', l: '\u3125', m: '\u723B', n: '\u51E0', o: '\u3116', p: '\u5369', q: 'Q', r: '\u5C3A', s: '\u4E02', t: '\u3112', u: '\u3129', v: '\u1D2F', w: '\u5C71', x: '\u4E42', y: '\u3122', z: '\u4E59' };
                return [...t].map(function(c) { return m[c.toLowerCase()] || c }).join('')
            };
            var fRN = function(t) {
                var m = { a: '\u1409', b: '\u1437', c: '\u1455', d: '\u1472', e: '\u1474', f: '\u1496', g: 'G', h: '\u157C', i: 'I', j: '\u144D', k: 'K', l: '\u146C', m: '\u1470', n: '\u1446', o: 'O', p: '\u1461', q: '\u146B', r: '\u1467', s: '\u1455', t: 'T', u: '\u1444', v: '\u1D2F', w: '\u146F', x: '\u157D', y: 'Y', z: '\u1618' };
                return [...t].map(function(c) { return m[c.toLowerCase()] || c }).join('')
            };
            var fCR = function(t) {
                var m = { a: '\uA86C', b: '\uA0F3', c: '\uA254', d: '\uA4AF', e: '\uA5C2', f: '\uA2B0', g: '\uA34C', h: '\uA05D', i: '\uA4D0', j: '\uA4BB', k: '\uA018', l: '\uA052', m: '\uA0B5', n: '\uA2CA', o: '\uA132', p: '\uA463', q: '\uA1B0', r: '\uA305', s: '\uA054', t: '\uA4C4', u: '\uA01E', v: '\uA02F', w: '\uA14F', x: '\uA267', y: '\uA4D0', z: '\uA074' };
                return [...t].map(function(c) { return m[c.toLowerCase()] || c }).join('')
            };
            var fZL = function(t) {
                var a = ['\u030D', '\u030E', '\u0311', '\u0307', '\u0308'],
                    b = ['\u0316', '\u0317', '\u0323', '\u0324', '\u0325'];

                function rr(x) { return x[Math.random() * x.length | 0] }
                return [...t].map(function(c) { return c === ' ' ? c : c + rr(a) + rr(b) }).join('')
            };
            var fZH = function(t) {
                var a = ['\u030D', '\u030E', '\u0311', '\u0307', '\u0308', '\u030A', '\u0342', '\u0303', '\u0302', '\u0300'],
                    b = ['\u0316', '\u0317', '\u0323', '\u0324', '\u0325', '\u031C', '\u031D', '\u031F', '\u0320', '\u0329'];

                function rs(x, n) { var s = ''; for (var i = 0; i < n; i++) s += x[Math.random() * x.length | 0]; return s }
                return [...t].map(function(c) { return c === ' ' ? c : c + rs(a, 3) + rs(b, 3) }).join('')
            };
            var fDArk = function(t) {
                var m = { a: '\u00E0', b: '\u0253', c: '\u0107', d: '\u010F', e: '\u00EB', f: '\u0192', g: '\u011F', h: '\u0266', i: '\u00EF', j: '\u0135', k: '\u0137', l: '\u013C', m: '\u1E43', n: '\u00F1', o: '\u00F8', p: '\u1E57', q: 'q', r: '\u0157', s: '\u015B', t: '\u0167', u: '\u00FC', v: '\u1E7F', w: '\u0175', x: '\u1E8B', y: '\u00FF', z: '\u017E', A: '\u00C0', B: '\u0181', C: '\u0106', D: '\u010E', E: '\u00CB', F: '\u0191', G: '\u011E', H: '\u0126', I: '\u00CF', J: '\u0134', K: '\u0136', L: '\u013B', M: '\u1E42', N: '\u00D1', O: '\u00D8', P: '\u1E56', Q: 'Q', R: '\u0156', S: '\u015A', T: '\u0166', U: '\u00DC', V: '\u1E7E', W: '\u0174', X: '\u1E8A', Y: '\u0178', Z: '\u017D' };
                return [...t].map(function(c) { return m[c] || c }).join('')
            };

            /* Add all core fonts */
            var fFT = function(t){ return [...t].map(function(c){ return c===' '?' ':'\u2665'+c; }).join('')+'\u2665'; };

            var coreFns = [fB, fI, fBI, fSC, fBS, fFK, fBK, fDS, fSN, fSB, fSI, fSBI, fMN, fVP, fSM, fFT, fBU, fNB, fSQ, fSP, fPA, fUD, fMR, fGK, fCQ, fKT, fRN, fCR, fZL, fZH, fDArk];
            coreFns.forEach(function(f, i) { FONTS.push({ n: 'Style ' + (i + 1), f: f }); });

            /* Emoji Styles */
            var EMJ = [
                ['\u2728 ', ' \u2728'], ['\uD83D\uDCAB ', ' \uD83D\uDCAB'], ['\uD83C\uDF80 ', ' \uD83C\uDF80'], ['\uD83D\uDC96 ', ' \uD83D\uDC96'], ['\uD83C\uDF38 ', ' \uD83C\uDF38'], ['\uD83C\uDF37 ', ' \uD83C\uDF37'], ['\uD83C\uDF40 ', ' \uD83C\uDF40'], ['\uD83C\uDF44 ', ' \uD83C\uDF44'], ['\uD83C\uDF53 ', ' \uD83C\uDF53'], ['\uD83C\uDF6D ', ' \uD83C\uDF6D'],
                ['\uD83E\uDD8B ', ' \uD83E\uDD8B'], ['\uD83C\uDF08 ', ' \uD83C\uDF08'], ['\uD83E\uDDB8 ', ' \uD83E\uDDB8'], ['\uD83C\uDF19 ', ' \uD83C\uDF19'], ['\u2601 ', ' \u2601'], ['\u2744 ', ' \u2744'], ['\uD83D\uDD25 ', ' \uD83D\uDD25'], ['\u26A1 ', ' \u26A1'], ['\uD83D\uDC8E ', ' \uD83D\uDC8E'], ['\uD83D\uDC51 ', ' \uD83D\uDC51'],
                ['\u2B50 ', ' \u2B50'], ['\uD83C\uDF1F ', ' \uD83C\uDF1F'], ['\uD83C\uDF08 ', ' \uD83C\uDF08'], ['\uD83C\uDF81 ', ' \uD83C\uDF81'], ['\uD83C\uDF80 ', ' \uD83C\uDF80'], ['\uD83E\uDE70 ', ' \uD83E\uDE70'], ['\uD83D\uDD6F ', ' \uD83D\uDD6F'], ['\uD83D\uDD4A ', ' \uD83D\uDD4A'], ['\uD83E\uA2A2 ', ' \uD83E\uA2A2'], ['\uD83C\uDF90 ', ' \uD83C\uDF90'],
                ['\uD83D\uDC52 ', ' \uD83D\uDC52'], ['\uD83E\uDDE4 ', ' \uD83E\uDDE4'], ['\uD83E\uDDE3 ', ' \uD83E\uDDE3'], ['\uD83E\uDDF5 ', ' \uD83E\uDDF5'], ['\uD83E\uDDF6 ', ' \uD83E\uDDF6'], ['\uD83E\uDE21 ', ' \uD83E\uDE21'], ['\uD83E\uDE22 ', ' \uD83E\uDE22'], ['\uD83E\uDDFa ', ' \uD83E\uDDFa'], ['\uD83E\uDDFc ', ' \uD83E\uDDFc'], ['\uD83E\uDDFd ', ' \uD83E\uDDFd'],
                ['\uD83E\uDDF9 ', ' \uD83E\uDDF9'], ['\uD83E\uDDFa ', ' \uD83E\uDDFa'], ['\uD83E\uDEA3 ', ' \uD83E\uDEA3'], ['\uD83E\uDEA5 ', ' \uD83E\uDEA5'], ['\uD83E\uDDB4 ', ' \uD83E\uDDB4'], ['\uD83E\uDDF7 ', ' \uD83E\uDDF7'], ['\uD83E\uDDB8 ', ' \uD83E\uDDB8'], ['\uD83E\uDE81 ', ' \uD83E\uDE81'], ['\uD83E\uDE80 ', ' \uD83E\uDE80'], ['\uD83E\uDE84 ', ' \uD83E\uDE84'],
                ['\uD83E\uDE85 ', ' \uD83E\uDE85'], ['\uD83E\uDE86 ', ' \uD83E\uDE86'], ['\uD83D\uDDBC ', ' \uD83D\uDDBC'], ['\uD83C\uDFB5\uD83C\uDF80 ', '\uD83C\uDF80\uD83C\uDFB5'], ['\uD83C\uDF19\u2B50 ', '\u2B50\uD83C\uDF19'], ['\uD83C\uDF70\uD83C\uDF37 ', '\uD83C\uDF37\uD83C\uDF70'], ['\uD83C\uDF08\uD83E\uDD84 ', '\uD83E\uDD84\uD83C\uDF08'], ['\uD83D\uDC9C\uD83C\uDF19 ', '\uD83C\uDF19\uD83D\uDC9C'], ['\uD83C\uDF38\uD83C\uDF38 ', '\uD83C\uDF38\uD83C\uDF38'], ['\u2728\uD83D\uDC96 ', '\uD83D\uDC96\u2728'],
                ['\uD83C\uDF80\uD83D\uDC97 ', '\uD83D\uDC97\uD83C\uDF80'], ['\uD83C\uDF37\uD83D\uDC95 ', '\uD83D\uDC95\uD83C\uDF37'], ['\uD83C\uDFAA\u2728 ', '\u2728\uD83C\uDFAA'], ['\uD83E\uDD8B\uD83D\uDC9C ', '\uD83D\uDC9C\uD83E\uDD8B'], ['\uD83C\uDF1F\uD83C\uDF19 ', '\uD83C\uDF19\uD83C\uDF1F'], ['\uD83C\uDFB6\uD83D\uDC96 ', '\uD83D\uDC96\uD83C\uDFB6'], ['\uD83D\uDC30\uD83C\uDF38 ', '\uD83C\uDF38\uD83D\uDC30'], ['\uD83C\uDF3A\uD83D\uDCAB ', '\uD83D\uDCAB\uD83C\uDF3A'], ['\uD83E\uDDDA\uD83C\uDF3F ', '\uD83C\uDF3F\uD83E\uDDDA'], ['\uD83C\uDF44\uD83C\uDF3F ', '\uD83C\uDF3F\uD83C\uDF44'],
                ['\uD83C\uDF38\uD83D\uDCAB ', '\uD83D\uDCAB\uD83C\uDF38'], ['\uD83C\uDFB6\uD83C\uDF19 ', '\uD83C\uDF19\uD83C\uDFB6'], ['\uD83C\uDF43\uD83C\uDF38 ', '\uD83C\uDF38\uD83C\uDF43'], ['\uD83C\uDF19\uD83D\uDC99 ', '\uD83D\uDC99\uD83C\uDF19'], ['\uD83E\uDD8B\uD83C\uDF19 ', '\uD83C\uDF19\uD83E\uDD8B'], ['\uD83C\uDF0A\uD83D\uDC99 ', '\uD83D\uDC99\uD83C\uDF0A'], ['\uD83C\uDF44\uD83D\uDCAB ', '\uD83D\uDCAB\uD83C\uDF44'], ['\uD83C\uDF38\uD83C\uDF1F ', '\uD83C\uDF1F\uD83C\uDF38'], ['\uD83C\uDF19\uD83C\uDFB6 ', '\uD83C\uDFB6\uD83C\uDF19'], ['\uD83C\uDF43\uD83C\uDF19 ', '\uD83C\uDF19\uD83C\uDF43']
            ];
            var EFN = [fSC, fI, fBI, fBS, fSC, fI, fBI, fSC];
            EMJ.forEach(function(e, i) {
                var fn = EFN[i % EFN.length];
                FONTS.push({ n: 'Emoji ' + (i + 1), f: (function(p, s, fn) { return function(t) { return p + fn(t) + s } })(e[0], e[1], fn) });
            });

            /* Old fonts from first file */
            var competitorFonts = [
                t => t.split('').map(c => ({'a':'ₐ','e':'ₑ','h':'ₕ','i':'ᵢ','j':'ⱼ','k':'ₖ','l':'ₗ','m':'ₘ','n':'ₙ','o':'ₒ','p':'ₚ','r':'ᵣ','s':'ₛ','t':'ₜ','u':'ᵤ','v':'ᵥ','x':'ₓ'}[c.toLowerCase()]||c)).join(''),
                t => t.split('').map(c => ({'a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ','i':'ⁱ','j':'ʲ','k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ','r':'ʳ','s':'ˢ','t':'ᵗ','u':'ᵘ','v':'ᵛ','w':'ʷ','x':'ˣ','y':'ʸ','z':'ᶻ'}[c.toLowerCase()]||c)).join(''),
                t => t.split('').map(c => ({'a':'α','b':'в','c':'¢','d':'∂','e':'є','f':'ƒ','g':'g','h':'н','i':'ι','j':'נ','k':'к','l':'ℓ','m':'м','n':'и','o':'σ','p':'ρ','q':'q','r':'я','s':'ѕ','t':'т','u':'υ','v':'ν','w':'ω','x':'ϰ','y':'у','z':'z'}[c.toLowerCase()]||c)).join(''),
                t => t.split('').map(c => ({'a':'₳','b':'฿','c':'₵','d':'Đ','e':'Ɇ','f':'₣','g':'₲','h':'Ⱨ','i':'ł','j':'J','k':'₭','l':'Ⱡ','m':'₥','n':'₦','o':'Ø','p':'₱','q':'Q','r':'Ɽ','s':'₴','t':'₮','u':'Ʉ','v':'V','w':'₩','x':'Ӿ','y':'¥','z':'Ƶ'}[c.toLowerCase()]||c)).join(''),
                t => t.split('').map(c => ({'a':'ﾑ','b':'乃','c':'c','d':'Ð','e':'乇','f':'ｷ','g':'g','h':'ん','i':'ﾉ','j':'ﾌ','k':'ズ','l':'ﾚ','m':'M','n':'刀','o':'o','p':'ｱ','q':'q','r':'尺','s':'丂','t':'ｲ','u':'u','v':'v','w':'w','x':'ﾒ','y':'ﾘ','z':'乙'}[c.toLowerCase()]||c)).join(''),
                t => t.split('').map(c => '【' + c + '】').join(''),
                t => t.split('').map(c => '『' + c + '』').join(''),
                t => '≋' + t.split('').join('≋') + '≋',
                t => '✨' + t + '✨',
                t => '(っ◔◡◔)っ ♥ ' + t + ' ♥',
                t => '˜”*°•.˜”*°• ' + t + ' •°*”˜.•°*”˜',
                t => ']|I{•------» ' + t + ' «------•}I|[',
                t => '✴ 🎀 ' + t + ' 🎀 ✴',
                t => '—(••÷ ' + t + ' ÷••(—',
                t => '¸,ø¤º°`°º¤ø,¸¸,ø¤º° ' + t + ' °º¤ø,¸¸,ø¤º°`°º¤ø,¸',
                t => '░▒▓█►─═ ' + t + ' ═─◄█▓▒░',
                
            ];
            competitorFonts.forEach(function(f, i) { FONTS.push({ n: 'New Style ' + (i + 1), f: f }); });

            var oldFonts = [
                (t) => t.split('').map(c => ({'A':'𝔄','B':'𝔅','C':'𝔆','D':'𝔇','E':'𝔈','F':'𝔉','G':'𝔊','H':'ℌ','I':'𝔍','J':'𝔎','K':'𝔏','L':'𝔏','M':'𝔐','N':'𝔑','O':'𝔒','P':'𝔓','Q':'𝔔','R':'𝔕','S':'𝔖','T':'𝔗','U':'𝔘','V':'𝔙','W':'𝔚','X':'𝔛','Y':'𝔜','Z':'𝔷','a':'𝔞','b':'𝔟','c':'𝔠','d':'𝔡','e':'𝔢','f':'𝔣','g':'𝔤','h':'𝔥','i':'𝔦','j':'𝔧','k':'𝔨','l':'𝔩','m':'𝔪','n':'𝔫','o':'𝔬','p':'𝔭','q':'𝔮','r':'𝔯','s':'𝔰','t':'𝔱','u':'𝔲','v':'𝔳','w':'𝔴','x':'𝔵','y':'𝔶','z':'𝔷'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'𝐀','B':'𝐁','C':'𝐂','D':'𝐃','E':'𝐄','F':'𝐅','G':'𝐆','H':'𝐇','I':'𝐈','J':'𝐉','K':'𝐊','L':'𝐋','M':'𝐌','N':'𝐍','O':'𝐎','P':'𝐏','Q':'𝐐','R':'𝐑','S':'𝐒','T':'𝐓','U':'𝐔','V':'𝐕','W':'𝐖','X':'𝐗','Y':'𝐘','Z':'𝐙','a':'𝐚','b':'𝐛','c':'𝐜','d':'𝐝','e':'𝐞','f':'𝐟','g':'𝐠','h':'𝐡','i':'𝐢','j':'𝐣','k':'𝐤','l':'𝐥','m':'𝐦','n':'𝐧','o':'𝐨','p':'𝐩','q':'𝐪','r':'𝐫','s':'𝐬','t':'𝐭','u':'𝐮','v':'𝐯','w':'𝐰','x':'𝐱','y':'𝐲','z':'𝐳','0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'𝘈','B':'𝘉','C':'𝘊','D':'𝘋','E':'𝘌','F':'𝘍','G':'𝘎','H':'𝘏','I':'𝘐','J':'𝘑','K':'𝘒','L':'𝘓','M':'𝘔','N':'𝘕','O':'𝘖','P':'𝘗','Q':'𝘘','R':'𝘙','S':'𝘚','T':'𝘛','U':'𝘜','V':'𝘝','W':'𝘞','X':'𝘟','Y':'𝘠','Z':'𝘡','a':'𝘢','b':'𝘣','c':'𝘤','d':'𝘥','e':'𝘦','f':'𝘧','g':'𝘨','h':'𝘩','i':'𝘪','j':'𝘫','k':'𝘬','l':'𝘭','m':'𝘮','n':'𝘯','o':'𝘰','p':'𝘱','q':'𝘲','r':'𝘳','s':'𝘴','t':'𝘵','u':'𝘶','v':'𝘷','w':'𝘸','x':'𝘹','y':'𝘺','z':'𝘻'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'𝓐','B':'𝓑','C':'𝓒','D':'𝓓','E':'𝓔','F':'𝓕','G':'𝓖','H':'𝓗','I':'𝓘','J':'𝓙','K':'𝓚','L':'𝓛','M':'𝓜','N':'𝓝','O':'𝓞','P':'𝓟','Q':'𝓠','R':'𝓡','S':'𝓢','T':'𝓣','U':'𝓤','V':'𝓥','W':'𝓦','X':'𝓧','Y':'𝓨','Z':'𝓩','a':'𝓪','b':'𝓫','c':'𝓬','d':'𝓭','e':'𝓮','f':'𝓯','g':'𝓰','h':'𝓱','i':'𝓲','j':'𝓳','k':'𝓴','l':'𝓵','m':'𝓶','n':'𝓷','o':'𝓸','p':'𝓹','q':'𝓺','r':'𝓻','s':'𝓼','t':'𝓽','u':'𝓾','v':'𝓿','w':'𝔀','x':'𝔁','y':'𝔂','z':'𝔃'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'𝔸','B':'𝔹','C':'ℂ','D':'𝔻','E':'𝔼','F':'𝔽','G':'𝔾','H':'ℍ','I':'𝕀','J':'𝕁','K':'𝕂','L':'𝕃','M':'𝕄','N':'ℕ','O':'𝕆','P':'ℙ','Q':'ℚ','R':'ℝ','S':'𝕊','T':'𝕋','U':'𝕌','V':'𝕍','W':'𝕎','X':'𝕏','Y':'𝕐','Z':'ℤ','a':'𝕒','b':'𝕓','c':'𝕔','d':'𝕕','e':'𝕖','f':'𝕗','g':'𝕘','h':'𝕙','i':'𝕚','j':'𝕛','k':'𝕜','l':'𝕝','m':'𝕞','n':'🇳','o':'𝔬','p':'𝔭','q':'𝔮','r':'𝔯','s':'𝔰','t':'𝔱','u':'𝔲','v':'𝔳','w':'𝔴','x':'𝔵','y':'𝔶','z':'𝔷'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'𝙰','B':'𝙱','C':'𝙲','D':'𝙳','E':'𝙴','F':'𝙵','G':'𝙶','H':'𝙷','I':'𝙸','J':'𝙹','K':'𝙺','L':'𝙻','M':'𝙼','N':'𝙽','O':'𝙾','P':'𝙿','Q':'𝚀','R':'𝚁','S':'𝚂','T':'𝚃','U':'𝚄','V':'𝚅','W':'𝚆','X':'𝚇','Y':'𝚈','Z':'𝚉','a':'𝚊','b':'𝚋','c':'𝚌','d':'𝚍','e':'𝚎','f':'𝚏','g':'𝚐','h':'𝚑','i':'𝚒','j':'𝚓','k':'𝚔','l':'𝚕','m':'𝚖','n':'𝚗','o':'𝚘','p':'𝚙','q':'𝚚','r':'𝚛','s':'𝚜','t':'𝚝','u':'𝚞','v':'𝚟','w':'𝚠','x':'𝚡','y':'𝚢','z':'𝚣'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'ᴘ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'ˣ','Y':'ʏ','Z':'ᴢ','a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ᴘ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'ˣ','y':'ʏ','z':'ᴢ'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'∀','B':'q','C':'Ɔ','D':'p','E':'Ǝ','F':'Ⅎ','G':'פ','H':'H','I':'I','J':'ſ','K':'⋊','L':'⅂','M':'W','N':'N','O':'O','P':'Ԁ','Q':'O','R':'ᴚ','S':'S','T':'⊥','U':'∩','V':'Λ','W':'M','X':'X','Y':'⅄','Z':'Z','a':'ɐ','b':'q','c':'ɔ','d':'p','e':'ǝ','f':'ɟ','g':'ƃ','h':'ɥ','i':'ᴉ','j':'ɾ','k':'ʞ','l':'l','m':'ɯ','n':'u','o':'o','p':'d','q':'b','r':'ɹ','s':'s','t':'ʇ','u':'n','v':'ʌ','w':'ʍ','x':'x','y':'ʎ','z':'z'}[c]||c)).join(''),
                (t) => t.split('').map(c => c + '\u0336').join(''),
                (t) => t.split('').map(c => c + '\u0305').join(''),
                (t) => t.split('').map(c => c + '\u0332').join(''),
                (t) => t.split('').map(c => ({'A':'Ⓐ','B':'Ⓑ','C':'Ⓒ','D':'Ⓓ','E':'Ⓔ','F':'Ⓕ','G':'Ⓖ','H':'Ⓗ','I':'Ⓘ','J':'Ⓙ','K':'Ⓚ','L':'Ⓛ','M':'Ⓜ','N':'Ⓝ','O':'Ⓞ','P':'Ⓟ','Q':'Ⓠ','R':'Ⓡ','S':'Ⓢ','T':'Ⓣ','U':'Ⓤ','V':'Ⓥ','W':'Ⓦ','X':'Ⓧ','Y':'Ⓨ','Z':'Ⓩ','a':'ⓐ','b':'ⓑ','c':'ⓒ','d':'ⓓ','e':'ⓔ','f':'ⓕ','g':'ⓖ','h':'ⓗ','i':'ⓘ','j':'ⓙ','k':'ⓚ','l':'ⓛ','m':'ⓜ','n':'ⓝ','o':'ⓞ','p':'ⓟ','q':'ⓠ','r':'ⓡ','s':'ⓢ','t':'ⓣ','u':'ⓤ','v':'ⓥ','w':'ⓦ','x':'ⓧ','y':'ⓨ','z':'ⓩ'}[c]||c)).join(''),
                (t) => t.split('').map(c => ({'A':'🄰','B':'🄱','C':'🄲','D':'🄳','E':'🄴','F':'🄵','G':'🄶','H':'🄷','I':'🄸','J':'🄹','K':'🄺','L':'🄻','M':'🄼','N':'🄽','O':'🄾','P':'🄿','Q':'🅀','R':'🅁','S':'🅂','T':'🅃','U':'🅄','V':'🅅','W':'🅆','X':'🅇','Y':'🅈','Z':'🅉','a':'🅰','b':'🅱','c':'🅲','d':'🅳','e':'🅴','f':'🅵','g':'🅶','h':'🅷','i':'🅸','j':'🅹','k':'🅺','l':'🅻','m':'🅼','n':'🅽','o':'🅾','p':'🅿','q':'🆀','r':'🆁','s':'🆂','t':'🆃','u':'🆄','v':'🆅','w':'🆆','x':'🆇','y':'🆈','z':'🆉'}[c]||c)).join('')
            ];
            oldFonts.forEach(function(f, i) { FONTS.push({ n: 'Classic Style ' + (i + 1), f: f }); });

            /* ── ADDITIONAL MISSING STYLES ── */
            function mk(fn,m){return function(t){return[...fn(t)].map(function(c){return c+m}).join('')}}
            function bd(p,fn,s){return function(t){return p+fn(t)+s}}
            function sp(s){return function(t){return[...t].join(s)}}
            function ef(m){return function(t){return[...t].map(function(c){return c+m}).join('')}}
            function perCh(t,p,s){return[...t].map(function(c){return c===' '?'  ':p+c+s}).join(' ')}

            [[ef('\u0333'),'Double Underline'],[ef('\u0330'),'Wave Below'],[ef('\u0338'),'Slash Through'],[ef('\u0334'),'Tilde Strike'],[ef('\u0307'),'Dots Above']].forEach(function(a){FONTS.push({f:a[0],n:a[1]})});

            FONTS.push({f:ef('\u033A'),n:'Bridge Below'});
            FONTS.push({f:ef('\u0346'),n:'Bridge Above'});
            FONTS.push({f:ef('\u0359'),n:'Asterisk Below'});
            FONTS.push({f:ef('\u031F'),n:'Plus Below'});
            FONTS.push({f:ef('\u033E'),n:'Vertical Tilde'});
            FONTS.push({f:ef('\u0489'),n:'Firework'});
            FONTS.push({f:function(t){return[...t].map(function(c){return c+'\u0332'+'\u0305'}).join('')},n:'Both Side Lines'});
            FONTS.push({f:function(t){return[...t].map(function(c){return c+'\u0308'+'\u0324'}).join('')},n:'Both Side Dots'});
            FONTS.push({f:function(t){return[...t].map(function(c){return c+'\u0353'+'\u033D'}).join('')},n:'Cross X Both'});

            [['  ','Wide Spaced'],[' \u00B7 ','Dot Sep'],[' \u2726 ','Star Sep'],[' \u2661 ','Heart Sep'],[' \u2665 ','Love Sep'],[' \u2022 ','Bullet Sep'],[' \u273F ','Flower Sep'],[' \uFF5E ','Wave Sep'],[' \u00D7 ','Cross Sep'],[' \u2764 ','Heart Fill'],[' \u2728 ','Sparkle Sep'],[' \u2606 ','Star Outline']].forEach(function(a){FONTS.push({f:sp(a[0]),n:a[1]})});

            ['\u0303','\u0301','\u0308','\u0307','\u030A','\u0300','\u0302','\u0304','\u030C','\u0306'].forEach(function(m,i){FONTS.push({f:mk(fB,m),n:'Bold mark '+(i+1)})});
            ['\u0303','\u0301','\u0308','\u0307','\u030A','\u0300','\u0302','\u0304','\u030C','\u0306'].forEach(function(m,i){FONTS.push({f:mk(fSC,m),n:'Script mark '+(i+1)})});
            ['\u0303','\u0301','\u0308','\u0307','\u030A'].forEach(function(m,i){FONTS.push({f:mk(fI,m),n:'Italic mark '+(i+1)})});
            ['\u0303','\u0301','\u0308','\u0307','\u030A'].forEach(function(m,i){FONTS.push({f:mk(fFK,m),n:'Gothic mark '+(i+1)})});
            ['\u0303','\u0301','\u0308','\u0307','\u030A'].forEach(function(m,i){FONTS.push({f:mk(fBS,m),n:'BoldScript mark '+(i+1)})});

            ['\u3010\u3011','\u3014\u3015','\u300A\u300B','\u300C\u300D','()','[]','{}','~~','||','**','==','\u2661\u2661','\u2726\u2726','\u2764\u2764','\u2654\u2654'].forEach(function(p){var a=p[0],b=p[p.length-1];FONTS.push({f:function(a,b){return function(t){return perCh(t,a,b)}}(a,b),n:'Wrap '+a+b})});

            FONTS.push({f:bd('\uA9C1',fB,'\uA9C2'),n:'Border \uA9C1\uA9C2'});
            FONTS.push({f:bd('\uA9C1',fSC,'\uA9C2'),n:'Border \uA9C1\uA9C2 Script'});
            FONTS.push({f:bd('\uA9C1',fBI,'\uA9C2'),n:'Border \uA9C1\uA9C2 Bold'});
            FONTS.push({f:bd('\uA9C1',fFK,'\uA9C2'),n:'Border \uA9C1\uA9C2 Gothic'});
            FONTS.push({f:bd('\u2726 ',fSC,' \u2726'),n:'Star Border Script'});
            FONTS.push({f:bd('\u2726 ',fBI,' \u2726'),n:'Star Border Bold'});
            FONTS.push({f:bd('\u2605 ',fB,' \u2605'),n:'Filled Star Bold'});
            FONTS.push({f:bd('\u2605 ',fSC,' \u2605'),n:'Filled Star Script'});
            FONTS.push({f:bd('\u2661 ',fSC,' \u2661'),n:'Heart Script'});
            FONTS.push({f:bd('\u2661 ',fBI,' \u2661'),n:'Heart Bold'});
            FONTS.push({f:bd('\u2764 ',fB,' \u2764'),n:'Love Bold'});
            FONTS.push({f:bd('\u273F ',fSC,' \u273F'),n:'Flower Script'});
            FONTS.push({f:bd('\u2654 ',fFK,' \u2654'),n:'Crown Gothic'});
            FONTS.push({f:bd('\u5F61 ',fSC,' \u5F61'),n:'\u5F61 Script'});
            FONTS.push({f:bd('\u3010',fSC,'\u3011'),n:'\u3010\u3011Script'});
            FONTS.push({f:bd('\u00AB',fBI,' \u00BB'),n:'\u00AB\u00BB Bold'});
            FONTS.push({f:bd('\u226A ',fB,' \u226B'),n:'\u226A\u226B Bold'});
            FONTS.push({f:bd('\u275D ',fSC,' \u275E'),n:'\u275D\u275E Script'});
            FONTS.push({f:bd('\u231C ',fMN,' \u231D'),n:'\u231C\u231D Mono'});
            FONTS.push({f:bd('\u2550\u2550\u273F\u2550\u2550\u2561\u00B0\u02D9\u2727 ',fSC,'\u2727\u02D9\u00B0\u255E\u2550\u2550\u273F\u2550\u2550'),n:'Floral border'});
            FONTS.push({f:bd('\u2727\uFF65\uFF3F: ',fSC,' :\uFF65\uFF3F\u2727'),n:'Sparkle border'});
            FONTS.push({f:bd('\u2729\u208A\u02DA\u22C6\u263E\u22C6\u207A\u208A\u2727 ',fBS,' \u2727\u208A\u207A\u22C6\u263E\u22C6\u02DA\u208A\u2729'),n:'Moon border'});
            FONTS.push({f:bd('\u2014(\u2022\u2022\u00F7[ ',fBI,' ]\u00F7\u2022\u2022)\u2014'),n:'Bracket border'});
            FONTS.push({f:bd('\u2554\u2550\u2550 ',fSC,' \u2550\u2550\u2557'),n:'Double line'});
            FONTS.push({f:bd('\u219E\u219E\u219E ',fB,' \u21A0\u21A0\u21A0'),n:'Arrow border'});
            FONTS.push({f:bd('\u226B\u2500\u2500\u2500\u2500 ',fFK,' \u2500\u2500\u2500\u2500\u226A'),n:'Gothic arrow'});
            FONTS.push({f:bd('\u2290 ',fBS,' \u2291'),n:'Bracket script'});
            FONTS.push({f:bd('\u2570\u2508\u27A4 ',fSC,' \u02DA\u208A\u00B7\u27A1\u27B3'),n:'Arrow flow'});
            FONTS.push({f:bd('\u256D\u2500\u2500\u22C5\u10D3\u22C5\u2500\u2500 \u2729 ',fGK,' \u2729 \u2500\u2500\u22C5\u10D3\u22C5\u2500\u2500\u256E'),n:'Corner border'});
            FONTS.push({f:bd('\u2605\u5F61[ ',fSM,'  ]\u5F61\u2605'),n:'\u5F61 Star wrap'});
            FONTS.push({f:bd('\uA9C1\u0F00',fBK,'\u0F00\uA9C2'),n:'Tibetan border'});
            FONTS.push({f:bd('\u2588\u2593\u2592\u2591 ',fSM,' \u2591\u2592\u2593\u2588'),n:'Block border'});
            FONTS.push({f:bd('\u21AB\u25C7\u2500\u25C7\u2500\u2500\u25C7 ',fSC,' \u25C7\u2500\u2500\u25C7\u2500\u25C7\u21AC'),n:'Diamond border'});
            FONTS.push({f:bd('\u2570\u2022\u2605\u2605 ',fSC,'\u2605\u2605\u2022\u256F'),n:'Star corner'});
            FONTS.push({f:bd('\u2606\u2605\u2606\u2605\u2192 ',fSC,' \u2190\u2606\u2605\u2606\u2605'),n:'Star arrow'});
            FONTS.push({f:bd('\u2726\u2022\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u2022 ',fB,' \u2022\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u2022\u2726'),n:'Dotted star'});
            FONTS.push({f:bd('\u2748\u2022\u226B\u2500\u2500\u2500\u226A\u2022\u25E6 ',fGK,' \u25E6\u2022\u226B\u2500\u2500\u2500\u226A\u2022\u2748'),n:'Snowflake border'});
            FONTS.push({f:bd('\uFF61\uFF9F\u2022\u2508\u2508\u0BAF\u2661\u0BAF\u2508\u2022\uFF9F\uFF61 ',fSC,' \uFF61\uFF9F\u2022\u2508\u2508\u0BAF\u2661\u0BAF\u2508\u2022\uFF9F\uFF61'),n:'JP heart border'});
            FONTS.push({f:bd('\u30BD(\u25C9\u1D17\u25C9)\u30CE \u2665 ',fSBI,' \u2665'),n:'Kaomoji heart'});
            FONTS.push({f:bd('\u2763\u00B7*/\u00B0*: ',fCQ,' .*/\u00B0*:.\u2763'),n:'Love asterisk'});
            FONTS.push({f:bd('\u2022\u2763\u2022\u0BAF\u0BAF ',fSBI,' \u0BAF\u0BAF\u2022\u2763\u2022'),n:'Love marks'});
            FONTS.push({f:bd('(\u3063\u25D4\u25E1\u25D4)\u3063 \u2665 ',fSBI,' \u2665'),n:'Kaomoji border 2'});
            FONTS.push({f:bd('\u21E6\u21E6\u21E6 ',fB,' \u21E8\u21E8\u21E8'),n:'Double arrow'});
            FONTS.push({f:bd('\u226B\u2500\u2500\u2500\u2500 ',fSC,' \u2500\u2500\u2500\u2500\u226A'),n:'Line border'});
            FONTS.push({f:bd('\u2605\u5F61\u5F61[ ',fSBI,' ]\u5F61\u5F61\u2605'),n:'\u5F61\u5F61 bold wrap'});
            FONTS.push({f:bd('\u2728\u273F\u2728 ',fSC,' \u2728\u273F\u2728'),n:'Cottagecore'});
            FONTS.push({f:bd('\u208A\u02DA\u2661\u02DA\u208A ',fBS,' \u208A\u02DA\u2661\u02DA\u208A'),n:'Soft girl'});
            FONTS.push({f:bd('~*~*~ ',fVP,' ~*~*~'),n:'Y2K style'});
            FONTS.push({f:bd('\u2604\uFE0F\u2728 ',fSC,' \u2728\u2604\uFE0F'),n:'Angel wings'});
            FONTS.push({f:bd('\u269B\uFE0F ',fFK,' \u269B\uFE0F'),n:'Atomic border'});
            FONTS.push({f:bd('\u222B\u222B ',fDS,' \u222B\u222B'),n:'Math border'});
            FONTS.push({f:bd('\u30DC\u30C3\u30C8 ',fSC,' \u30DC\u30C3\u30C8'),n:'JP bot border'});
            FONTS.push({f:bd('\u262D\uFE0F ',fBK,' \u262D\uFE0F'),n:'Symbol border'});

            
export { FONTS };
