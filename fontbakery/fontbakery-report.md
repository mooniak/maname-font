## FontBakery report

fontbakery version: 0.12.6



## Experimental checks

These won't break the CI job for now, but will become effective after some time if nobody raises any concern.


<details><summary>[1] Maname-Regular.ttf</summary>
<div>
<details>
    <summary>⚠️ <b>WARN</b> Validate location, size and resolution of article images. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.article.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>
</div>
</details>




## All other checks



<details><summary>[13] Maname-Regular.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 342, but got 334 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check glyphs in mark glyph class are non-spacing. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.gdef.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The following spacing glyphs may be in the GDEF mark glyph class by mistake:
sinVirama (U+0DCA)</p>
 [code: spacing-mark-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: asterisk	Contours detected: 2	Expected: 1 or 4

- Glyph name: nine	Contours detected: 3	Expected: 1 or 2

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: cedilla	Contours detected: 2	Expected: 1

- Glyph name: questiondown	Contours detected: 3	Expected: 2

- Glyph name: Ccedilla	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: ccedilla	Contours detected: 3	Expected: 1 or 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0123	Contours detected: 1	Expected: 3 or 4

- Glyph name: Eng	Contours detected: 2	Expected: 1

- Glyph name: Scedilla	Contours detected: 3	Expected: 1 or 2

- Glyph name: scedilla	Contours detected: 3	Expected: 1 or 2

- Glyph name: uni0162	Contours detected: 3	Expected: 1 or 2

- Glyph name: uni0163	Contours detected: 3	Expected: 1 or 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni0327	Contours detected: 2	Expected: 1

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Ccedilla	Contours detected: 3	Expected: 1 or 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eng	Contours detected: 2	Expected: 1

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: asterisk	Contours detected: 2	Expected: 1 or 4

- Glyph name: ccedilla	Contours detected: 3	Expected: 1 or 2

- Glyph name: cedilla	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: fi	Contours detected: 1	Expected: 3

- Glyph name: fl	Contours detected: 1	Expected: 2

- Glyph name: nine	Contours detected: 3	Expected: 1 or 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: questiondown	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0123	Contours detected: 1	Expected: 3 or 4

- Glyph name: uni0162	Contours detected: 3	Expected: 1 or 2

- Glyph name: uni0163	Contours detected: 3	Expected: 1 or 2

- Glyph name: uni0327	Contours detected: 2	Expected: 1

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- k.001

- mooniak

- sinCha.reph

- sinDdha.reph

- sinFRI

- sinFRIi

- sinFa.reph

- sinLa.reph

- sinLla.reph

- sinMatraI.alt

- sinMatraI.alt1

- sinMatraI.alt2

- sinMatraI.alt3

- sinMatraIi.alt

- sinMatraIi.alt1

- sinMatraIi.alt2

- sinMatraIi.alt3

- sinMatraU.alt1

- sinMatraUu.alt

- sinMatraUu.alt1

- sinMatraUu.alt2

- sinMatraUu.alt3

- sinMba.reph

- sinNDRI

- sinNDRIi

- sinNdRa

- sinNda.reph

- sinNga.reph

- sinNndda.reph

- sinNnga.reph

- sinNyja.reph

- sinOnelith

- sinPf.virama

- sinPfI

- sinPfIi

- sinPfR.virama

- sinPfRI

- sinPfRIi

- sinPfRa

- sinPfU

- sinPfUu

- sinPfa

- sinPha.reph

- sinRU_period

- sinRakar

- sinRakar.long

- sinRakar.medium

- sinRakar.short

- sinReph.2

- sinSsRI

- sinSsRIi

- sinTtha.reph

- trtight
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/outline.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* B (U+0042): L&lt;&lt;199.0,347.0&gt;--&lt;247.0,346.0&gt;&gt; -&gt; L&lt;&lt;247.0,346.0&gt;--&lt;301.0,348.0&gt;&gt;

* H (U+0048): L&lt;&lt;204.0,335.0&gt;--&lt;410.0,335.0&gt;&gt; -&gt; L&lt;&lt;410.0,335.0&gt;--&lt;495.0,338.0&gt;&gt;

* Hbar (U+0126): L&lt;&lt;204.0,335.0&gt;--&lt;410.0,335.0&gt;&gt; -&gt; L&lt;&lt;410.0,335.0&gt;--&lt;495.0,338.0&gt;&gt;

* Hbar (U+0126): L&lt;&lt;208.0,455.0&gt;--&lt;402.0,455.0&gt;&gt; -&gt; L&lt;&lt;402.0,455.0&gt;--&lt;493.0,457.0&gt;&gt;

* Hcircumflex (U+0124): L&lt;&lt;204.0,335.0&gt;--&lt;410.0,335.0&gt;&gt; -&gt; L&lt;&lt;410.0,335.0&gt;--&lt;495.0,338.0&gt;&gt;

* OE (U+0152): L&lt;&lt;511.0,554.0&gt;--&lt;509.0,569.0&gt;&gt; -&gt; L&lt;&lt;509.0,569.0&gt;--&lt;505.0,616.0&gt;&gt;

* ae (U+00E6): L&lt;&lt;415.0,262.0&gt;--&lt;575.0,278.0&gt;&gt; -&gt; L&lt;&lt;575.0,278.0&gt;--&lt;624.0,279.0&gt;&gt;

* aeacute (U+01FD): L&lt;&lt;415.0,262.0&gt;--&lt;575.0,278.0&gt;&gt; -&gt; L&lt;&lt;575.0,278.0&gt;--&lt;624.0,279.0&gt;&gt;

* bracketleft (U+005B): L&lt;&lt;140.0,-53.0&gt;--&lt;193.0,-54.0&gt;&gt; -&gt; L&lt;&lt;193.0,-54.0&gt;--&lt;291.0,-52.0&gt;&gt;

* bracketleft (U+005B): L&lt;&lt;62.0,633.0&gt;--&lt;222.0,632.0&gt;&gt; -&gt; L&lt;&lt;222.0,632.0&gt;--&lt;299.0,633.0&gt;&gt;

* bracketright (U+005D): L&lt;&lt;62.0,633.0&gt;--&lt;138.0,632.0&gt;&gt; -&gt; L&lt;&lt;138.0,632.0&gt;--&lt;298.0,633.0&gt;&gt;

* bracketright (U+005D): L&lt;&lt;69.0,-52.0&gt;--&lt;168.0,-54.0&gt;&gt; -&gt; L&lt;&lt;168.0,-54.0&gt;--&lt;221.0,-53.0&gt;&gt;

* e (U+0065): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* eacute (U+00E9): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* ebreve (U+0115): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* ecaron (U+011B): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* ecircumflex (U+00EA): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* edieresis (U+00EB): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* edotaccent (U+0117): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* egrave (U+00E8): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* emacron (U+0113): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* eogonek (U+0119): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* m (U+006D): L&lt;&lt;506.0,297.0&gt;--&lt;504.0,187.0&gt;&gt; -&gt; L&lt;&lt;504.0,187.0&gt;--&lt;501.0,91.0&gt;&gt;

* m (U+006D): L&lt;&lt;787.0,297.0&gt;--&lt;785.0,187.0&gt;&gt; -&gt; L&lt;&lt;785.0,187.0&gt;--&lt;782.0,91.0&gt;&gt;

* oe (U+0153): L&lt;&lt;482.0,262.0&gt;--&lt;642.0,278.0&gt;&gt; -&gt; L&lt;&lt;642.0,278.0&gt;--&lt;691.0,278.0&gt;&gt;

* sinCh.virama: L&lt;&lt;326.0,303.0&gt;--&lt;326.0,305.0&gt;&gt; -&gt; L&lt;&lt;326.0,305.0&gt;--&lt;326.0,308.0&gt;&gt;

* sinFI: L&lt;&lt;470.0,447.0&gt;--&lt;470.0,447.0&gt;&gt; -&gt; L&lt;&lt;470.0,447.0&gt;--&lt;471.0,447.0&gt;&gt;

* sinJny.virama: L&lt;&lt;730.0,492.0&gt;--&lt;730.0,492.0&gt;&gt; -&gt; L&lt;&lt;730.0,492.0&gt;--&lt;733.0,492.0&gt;&gt;

* sinJnya (U+0DA5): L&lt;&lt;730.0,492.0&gt;--&lt;730.0,492.0&gt;&gt; -&gt; L&lt;&lt;730.0,492.0&gt;--&lt;733.0,492.0&gt;&gt;

* sinJnya.reph: L&lt;&lt;730.0,492.0&gt;--&lt;730.0,492.0&gt;&gt; -&gt; L&lt;&lt;730.0,492.0&gt;--&lt;733.0,492.0&gt;&gt;

* sinKUu: L&lt;&lt;599.0,83.0&gt;--&lt;600.0,83.0&gt;&gt; -&gt; L&lt;&lt;600.0,83.0&gt;--&lt;600.0,83.0&gt;&gt;

* sinLVocalic (U+0D8F): L&lt;&lt;616.0,484.0&gt;--&lt;617.0,484.0&gt;&gt; -&gt; L&lt;&lt;617.0,484.0&gt;--&lt;617.0,484.0&gt;&gt;

* sinLlVocalic (U+0D90): L&lt;&lt;616.0,484.0&gt;--&lt;617.0,484.0&gt;&gt; -&gt; L&lt;&lt;617.0,484.0&gt;--&lt;617.0,484.0&gt;&gt;

* sinND.virama: L&lt;&lt;684.0,492.0&gt;--&lt;684.0,492.0&gt;&gt; -&gt; L&lt;&lt;684.0,492.0&gt;--&lt;686.0,492.0&gt;&gt;

* sinNDI: L&lt;&lt;684.0,492.0&gt;--&lt;684.0,492.0&gt;&gt; -&gt; L&lt;&lt;684.0,492.0&gt;--&lt;686.0,492.0&gt;&gt;

* sinNDIi: L&lt;&lt;684.0,492.0&gt;--&lt;684.0,492.0&gt;&gt; -&gt; L&lt;&lt;684.0,492.0&gt;--&lt;686.0,492.0&gt;&gt;

* sinNDa.reph: L&lt;&lt;684.0,492.0&gt;--&lt;684.0,492.0&gt;&gt; -&gt; L&lt;&lt;684.0,492.0&gt;--&lt;686.0,492.0&gt;&gt;

* sinNDa: L&lt;&lt;684.0,492.0&gt;--&lt;684.0,492.0&gt;&gt; -&gt; L&lt;&lt;684.0,492.0&gt;--&lt;686.0,492.0&gt;&gt;

* sinNnI: L&lt;&lt;365.0,490.0&gt;--&lt;366.0,490.0&gt;&gt; -&gt; L&lt;&lt;366.0,490.0&gt;--&lt;367.0,490.0&gt;&gt;

* sinNy.virama: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt;

* sinNy.virama: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNy.virama: L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt; -&gt; L&lt;&lt;866.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNyI: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt;

* sinNyI: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNyI: L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt; -&gt; L&lt;&lt;866.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNyI: L&lt;&lt;866.0,492.0&gt;--&lt;866.0,492.0&gt;&gt; -&gt; L&lt;&lt;866.0,492.0&gt;--&lt;867.0,492.0&gt;&gt;

* sinNyIi: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt;

* sinNyIi: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNyUu: L&lt;&lt;845.0,490.0&gt;--&lt;845.0,490.0&gt;&gt; -&gt; L&lt;&lt;845.0,490.0&gt;--&lt;845.0,490.0&gt;&gt;

* sinNya (U+0DA4): L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt;

* sinNya (U+0DA4): L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNya (U+0DA4): L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt; -&gt; L&lt;&lt;866.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNya.reph: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt;

* sinNya.reph: L&lt;&lt;864.0,492.0&gt;--&lt;864.0,492.0&gt;&gt; -&gt; L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinNya.reph: L&lt;&lt;864.0,492.0&gt;--&lt;866.0,492.0&gt;&gt; -&gt; L&lt;&lt;866.0,492.0&gt;--&lt;866.0,492.0&gt;&gt;

* sinPR.virama: L&lt;&lt;604.0,203.0&gt;--&lt;604.0,202.0&gt;&gt; -&gt; L&lt;&lt;604.0,202.0&gt;--&lt;604.0,201.0&gt;&gt;

* sinPRI: L&lt;&lt;602.0,203.0&gt;--&lt;602.0,202.0&gt;&gt; -&gt; L&lt;&lt;602.0,202.0&gt;--&lt;602.0,201.0&gt;&gt;

* sinPRIi: L&lt;&lt;604.0,203.0&gt;--&lt;604.0,202.0&gt;&gt; -&gt; L&lt;&lt;604.0,202.0&gt;--&lt;604.0,201.0&gt;&gt;

* sinPRa: L&lt;&lt;602.0,203.0&gt;--&lt;602.0,202.0&gt;&gt; -&gt; L&lt;&lt;602.0,202.0&gt;--&lt;602.0,201.0&gt;&gt;

* sinShUu: L&lt;&lt;486.0,63.0&gt;--&lt;486.0,68.0&gt;&gt; -&gt; L&lt;&lt;486.0,68.0&gt;--&lt;486.0,69.0&gt;&gt;

* sinTUu: L&lt;&lt;536.0,83.0&gt;--&lt;537.0,83.0&gt;&gt; -&gt; L&lt;&lt;537.0,83.0&gt;--&lt;537.0,83.0&gt;&gt;

* trademark (U+2122): L&lt;&lt;240.0,572.0&gt;--&lt;293.0,571.0&gt;&gt; -&gt; L&lt;&lt;293.0,571.0&gt;--&lt;342.0,572.0&gt;&gt;

* trademark (U+2122): L&lt;&lt;448.0,572.0&gt;--&lt;495.0,571.0&gt;&gt; -&gt; L&lt;&lt;495.0,571.0&gt;--&lt;548.0,572.0&gt;&gt;

* u111EC (U+111EC): L&lt;&lt;664.0,271.0&gt;--&lt;664.0,269.0&gt;&gt; -&gt; L&lt;&lt;664.0,269.0&gt;--&lt;664.0,268.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;427.0,275.0&gt;--&lt;212.0,256.0&gt;&gt; -&gt; L&lt;&lt;212.0,256.0&gt;--&lt;120.0,255.0&gt;&gt;

* uni0205 (U+0205): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni0207 (U+0207): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni0DE6 (U+0DE6): L&lt;&lt;73.0,0.0&gt;--&lt;75.0,143.0&gt;&gt; -&gt; L&lt;&lt;75.0,143.0&gt;--&lt;77.0,340.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;506.0,297.0&gt;--&lt;504.0,187.0&gt;&gt; -&gt; L&lt;&lt;504.0,187.0&gt;--&lt;501.0,91.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;787.0,297.0&gt;--&lt;785.0,187.0&gt;&gt; -&gt; L&lt;&lt;785.0,187.0&gt;--&lt;782.0,91.0&gt;&gt;

* uni1EB9 (U+1EB9): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EBB (U+1EBB): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EBD (U+1EBD): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EBF (U+1EBF): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EC1 (U+1EC1): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EC3 (U+1EC3): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EC5 (U+1EC5): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* uni1EC7 (U+1EC7): L&lt;&lt;132.0,262.0&gt;--&lt;292.0,278.0&gt;&gt; -&gt; L&lt;&lt;292.0,278.0&gt;--&lt;341.0,278.0&gt;&gt;

* w (U+0077): L&lt;&lt;280.0,460.0&gt;--&lt;379.0,458.0&gt;&gt; -&gt; L&lt;&lt;379.0,458.0&gt;--&lt;487.0,460.0&gt;&gt;

* wacute (U+1E83): L&lt;&lt;280.0,460.0&gt;--&lt;379.0,458.0&gt;&gt; -&gt; L&lt;&lt;379.0,458.0&gt;--&lt;487.0,460.0&gt;&gt;

* wcircumflex (U+0175): L&lt;&lt;280.0,460.0&gt;--&lt;379.0,458.0&gt;&gt; -&gt; L&lt;&lt;379.0,458.0&gt;--&lt;487.0,460.0&gt;&gt;

* wdieresis (U+1E85): L&lt;&lt;280.0,460.0&gt;--&lt;379.0,458.0&gt;&gt; -&gt; L&lt;&lt;379.0,458.0&gt;--&lt;487.0,460.0&gt;&gt;

* wgrave (U+1E81): L&lt;&lt;280.0,460.0&gt;--&lt;379.0,458.0&gt;&gt; -&gt; L&lt;&lt;379.0,458.0&gt;--&lt;487.0,460.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/outline.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;176.0,555.0&gt;--&lt;178.0,551.0&gt;&gt;/B&lt;&lt;178.0,551.0&gt;-&lt;177.0,554.0&gt;-&lt;177.0,554.0&gt;&gt; = 8.130102354155916

* fi (U+FB01): L&lt;&lt;296.0,453.0&gt;--&lt;299.0,438.0&gt;&gt;/L&lt;&lt;299.0,438.0&gt;--&lt;297.0,454.0&gt;&gt; = 4.184916125118319

* sinAi (U+0D93): B&lt;&lt;605.5,210.0&gt;-&lt;636.0,243.0&gt;-&lt;682.0,262.0&gt;&gt;/B&lt;&lt;682.0,262.0&gt;-&lt;618.0,248.0&gt;-&lt;570.5,227.0&gt;&gt; = 10.103666086968094

* sinB.virama: L&lt;&lt;222.0,696.0&gt;--&lt;256.0,705.0&gt;&gt;/B&lt;&lt;256.0,705.0&gt;-&lt;236.0,702.0&gt;-&lt;229.0,699.0&gt;&gt; = 6.2957143604074775

* sinBR.virama: L&lt;&lt;222.0,696.0&gt;--&lt;256.0,705.0&gt;&gt;/B&lt;&lt;256.0,705.0&gt;-&lt;236.0,702.0&gt;-&lt;229.0,699.0&gt;&gt; = 6.2957143604074775

* sinBRIi: B&lt;&lt;588.0,21.0&gt;-&lt;603.0,68.0&gt;-&lt;610.0,115.0&gt;&gt;/B&lt;&lt;610.0,115.0&gt;-&lt;589.0,63.0&gt;-&lt;549.0,27.0&gt;&gt; = 13.51998528416231

* sinBh.virama: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBhI: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBhIi: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBhR.virama: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBhRI: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBhRIi: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBhRa: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBha (U+0DB7): B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinBha.reph: B&lt;&lt;129.5,244.5&gt;-&lt;151.0,277.0&gt;-&lt;187.0,295.0&gt;&gt;/B&lt;&lt;187.0,295.0&gt;-&lt;132.0,283.0&gt;-&lt;91.5,264.0&gt;&gt; = 14.257035359650056

* sinC.virama: B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinCI: B&lt;&lt;116.5,220.0&gt;-&lt;140.0,248.0&gt;-&lt;173.0,265.0&gt;&gt;/B&lt;&lt;173.0,265.0&gt;-&lt;124.0,251.0&gt;-&lt;88.0,235.5&gt;&gt; = 11.309932474020195

* sinCIi: B&lt;&lt;146.0,215.0&gt;-&lt;174.0,247.0&gt;-&lt;211.0,265.0&gt;&gt;/B&lt;&lt;211.0,265.0&gt;-&lt;158.0,251.0&gt;-&lt;118.0,234.5&gt;&gt; = 11.14553324481428

* sinCR.virama: B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinCRI: B&lt;&lt;116.5,220.0&gt;-&lt;140.0,248.0&gt;-&lt;173.0,265.0&gt;&gt;/B&lt;&lt;173.0,265.0&gt;-&lt;124.0,251.0&gt;-&lt;88.0,235.5&gt;&gt; = 11.309932474020195

* sinCRIi: B&lt;&lt;146.0,215.0&gt;-&lt;174.0,247.0&gt;-&lt;211.0,265.0&gt;&gt;/B&lt;&lt;211.0,265.0&gt;-&lt;158.0,251.0&gt;-&lt;118.0,234.5&gt;&gt; = 11.14553324481428

* sinCRa: B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinCU: B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinCUu: B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinCa (U+0DA0): B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinCa.reph: B&lt;&lt;128.5,233.5&gt;-&lt;159.0,268.0&gt;-&lt;197.0,287.0&gt;&gt;/B&lt;&lt;197.0,287.0&gt;-&lt;140.0,273.0&gt;-&lt;99.0,255.5&gt;&gt; = 12.765565781058578

* sinDV.virama: B&lt;&lt;409.0,719.0&gt;-&lt;406.0,719.0&gt;-&lt;403.0,718.0&gt;&gt;/L&lt;&lt;403.0,718.0&gt;--&lt;409.0,719.0&gt;&gt; = 8.972626614896358

* sinDV.virama: L&lt;&lt;335.0,702.0&gt;--&lt;363.0,708.0&gt;&gt;/B&lt;&lt;363.0,708.0&gt;-&lt;347.0,706.0&gt;-&lt;341.0,704.0&gt;&gt; = 4.969740728110216

* sinDV.virama: L&lt;&lt;403.0,718.0&gt;--&lt;409.0,719.0&gt;&gt;/B&lt;&lt;409.0,719.0&gt;-&lt;406.0,719.0&gt;-&lt;403.0,718.0&gt;&gt; = 9.462322208025613

* sinDd.virama: B&lt;&lt;119.5,233.5&gt;-&lt;146.0,271.0&gt;-&lt;190.0,291.0&gt;&gt;/B&lt;&lt;190.0,291.0&gt;-&lt;136.0,276.0&gt;-&lt;102.5,257.5&gt;&gt; = 8.919843783662243

* sinDdI: B&lt;&lt;155.5,226.5&gt;-&lt;183.0,244.0&gt;-&lt;215.0,255.0&gt;&gt;/B&lt;&lt;215.0,255.0&gt;-&lt;153.0,240.0&gt;-&lt;107.0,219.5&gt;&gt; = 5.369865291827683

* sinDdIi: B&lt;&lt;198.0,232.0&gt;-&lt;238.0,249.0&gt;-&lt;277.0,260.0&gt;&gt;/B&lt;&lt;277.0,260.0&gt;-&lt;200.0,247.0&gt;-&lt;142.5,222.5&gt;&gt; = 6.168228939920462

* sinDdR.virama: B&lt;&lt;119.5,233.5&gt;-&lt;146.0,271.0&gt;-&lt;190.0,291.0&gt;&gt;/B&lt;&lt;190.0,291.0&gt;-&lt;136.0,276.0&gt;-&lt;102.5,257.5&gt;&gt; = 8.919843783662243

* sinDdRI: B&lt;&lt;155.5,226.5&gt;-&lt;183.0,244.0&gt;-&lt;215.0,255.0&gt;&gt;/B&lt;&lt;215.0,255.0&gt;-&lt;153.0,240.0&gt;-&lt;107.0,219.5&gt;&gt; = 5.369865291827683

* sinDdRIi: B&lt;&lt;198.0,232.0&gt;-&lt;238.0,249.0&gt;-&lt;277.0,260.0&gt;&gt;/B&lt;&lt;277.0,260.0&gt;-&lt;200.0,247.0&gt;-&lt;142.5,222.5&gt;&gt; = 6.168228939920462

* sinDdRa: B&lt;&lt;119.5,233.5&gt;-&lt;146.0,271.0&gt;-&lt;190.0,291.0&gt;&gt;/B&lt;&lt;190.0,291.0&gt;-&lt;136.0,276.0&gt;-&lt;102.5,257.5&gt;&gt; = 8.919843783662243

* sinDdU: B&lt;&lt;98.5,233.5&gt;-&lt;125.0,271.0&gt;-&lt;169.0,291.0&gt;&gt;/B&lt;&lt;169.0,291.0&gt;-&lt;115.0,276.0&gt;-&lt;81.5,257.5&gt;&gt; = 8.919843783662243

* sinDdUu: B&lt;&lt;119.5,233.5&gt;-&lt;146.0,271.0&gt;-&lt;190.0,291.0&gt;&gt;/B&lt;&lt;190.0,291.0&gt;-&lt;136.0,276.0&gt;-&lt;102.5,257.5&gt;&gt; = 8.919843783662243

* sinDda (U+0DA9): B&lt;&lt;119.5,233.5&gt;-&lt;146.0,271.0&gt;-&lt;190.0,291.0&gt;&gt;/B&lt;&lt;190.0,291.0&gt;-&lt;136.0,276.0&gt;-&lt;102.5,257.5&gt;&gt; = 8.919843783662243

* sinDda.reph: B&lt;&lt;119.5,233.5&gt;-&lt;146.0,271.0&gt;-&lt;190.0,291.0&gt;&gt;/B&lt;&lt;190.0,291.0&gt;-&lt;136.0,276.0&gt;-&lt;102.5,257.5&gt;&gt; = 8.919843783662243

* sinDdh.virama: B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDdhI: B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDdhIi: B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDdhU: B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDdhUu: B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDdha (U+0DAA): B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDdha.reph: B&lt;&lt;154.0,247.0&gt;-&lt;181.0,265.0&gt;-&lt;212.0,276.0&gt;&gt;/B&lt;&lt;212.0,276.0&gt;-&lt;148.0,263.0&gt;-&lt;100.0,241.5&gt;&gt; = 8.054663583380213

* sinDh.virama: B&lt;&lt;290.0,666.0&gt;-&lt;287.0,666.0&gt;-&lt;283.0,664.0&gt;&gt;/L&lt;&lt;283.0,664.0&gt;--&lt;290.0,666.0&gt;&gt; = 10.619655276155106

* sinDh.virama: L&lt;&lt;216.0,648.0&gt;--&lt;240.0,654.0&gt;&gt;/B&lt;&lt;240.0,654.0&gt;-&lt;226.0,652.0&gt;-&lt;221.0,650.0&gt;&gt; = 5.906141113770497

* sinDhR.virama: B&lt;&lt;290.0,666.0&gt;-&lt;287.0,666.0&gt;-&lt;283.0,664.0&gt;&gt;/L&lt;&lt;283.0,664.0&gt;--&lt;290.0,666.0&gt;&gt; = 10.619655276155106

* sinDhR.virama: L&lt;&lt;216.0,648.0&gt;--&lt;240.0,654.0&gt;&gt;/B&lt;&lt;240.0,654.0&gt;-&lt;226.0,652.0&gt;-&lt;221.0,650.0&gt;&gt; = 5.906141113770497

* sinE (U+0D91): B&lt;&lt;134.5,210.0&gt;-&lt;165.0,243.0&gt;-&lt;211.0,262.0&gt;&gt;/B&lt;&lt;211.0,262.0&gt;-&lt;147.0,248.0&gt;-&lt;99.5,227.0&gt;&gt; = 10.103666086968094

* sinEe (U+0D92): B&lt;&lt;114.5,210.0&gt;-&lt;145.0,243.0&gt;-&lt;191.0,262.0&gt;&gt;/B&lt;&lt;191.0,262.0&gt;-&lt;127.0,248.0&gt;-&lt;79.5,227.0&gt;&gt; = 10.103666086968094

* sinI (U+0D89): B&lt;&lt;509.5,26.0&gt;-&lt;445.0,-22.0&gt;-&lt;333.0,-51.0&gt;&gt;/B&lt;&lt;333.0,-51.0&gt;-&lt;346.0,-50.0&gt;-&lt;360.0,-48.5&gt;&gt; = 10.11799460385907

* sinIi (U+0D8A): B&lt;&lt;206.5,424.5&gt;-&lt;168.0,399.0&gt;-&lt;143.0,375.0&gt;&gt;/B&lt;&lt;143.0,375.0&gt;-&lt;170.0,400.0&gt;-&lt;216.0,424.0&gt;&gt; = 1.0334588338579653

* sinJh.virama: B&lt;&lt;269.0,286.0&gt;-&lt;251.0,272.0&gt;-&lt;239.0,261.0&gt;&gt;/B&lt;&lt;239.0,261.0&gt;-&lt;276.0,288.0&gt;-&lt;327.0,311.0&gt;&gt; = 6.391106228521098

* sinJh.virama: B&lt;&lt;767.0,666.0&gt;-&lt;764.0,666.0&gt;-&lt;760.0,664.0&gt;&gt;/L&lt;&lt;760.0,664.0&gt;--&lt;767.0,666.0&gt;&gt; = 10.619655276155106

* sinJh.virama: L&lt;&lt;693.0,648.0&gt;--&lt;717.0,654.0&gt;&gt;/B&lt;&lt;717.0,654.0&gt;-&lt;703.0,652.0&gt;-&lt;698.0,650.0&gt;&gt; = 5.906141113770497

* sinJhI: B&lt;&lt;258.0,286.0&gt;-&lt;240.0,272.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 6.391106228521098

* sinJhIi: B&lt;&lt;258.0,286.0&gt;-&lt;240.0,272.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 6.391106228521098

* sinJhR.virama: B&lt;&lt;269.0,286.0&gt;-&lt;251.0,272.0&gt;-&lt;239.0,261.0&gt;&gt;/B&lt;&lt;239.0,261.0&gt;-&lt;276.0,288.0&gt;-&lt;327.0,311.0&gt;&gt; = 6.391106228521098

* sinJhR.virama: B&lt;&lt;767.0,666.0&gt;-&lt;764.0,666.0&gt;-&lt;760.0,664.0&gt;&gt;/L&lt;&lt;760.0,664.0&gt;--&lt;767.0,666.0&gt;&gt; = 10.619655276155106

* sinJhR.virama: L&lt;&lt;693.0,648.0&gt;--&lt;717.0,654.0&gt;&gt;/B&lt;&lt;717.0,654.0&gt;-&lt;703.0,652.0&gt;-&lt;698.0,650.0&gt;&gt; = 5.906141113770497

* sinJhRI: B&lt;&lt;258.0,286.0&gt;-&lt;240.0,272.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 6.391106228521098

* sinJhRIi: B&lt;&lt;258.0,286.0&gt;-&lt;240.0,272.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 6.391106228521098

* sinJhRa: B&lt;&lt;284.0,306.0&gt;-&lt;244.0,277.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 8.880659150520234

* sinJhU: B&lt;&lt;284.0,306.0&gt;-&lt;244.0,277.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 8.880659150520234

* sinJhUu: B&lt;&lt;284.0,306.0&gt;-&lt;244.0,277.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 8.880659150520234

* sinJha (U+0DA3): B&lt;&lt;284.0,306.0&gt;-&lt;244.0,277.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 8.880659150520234

* sinJha.reph: B&lt;&lt;284.0,306.0&gt;-&lt;244.0,277.0&gt;-&lt;228.0,261.0&gt;&gt;/B&lt;&lt;228.0,261.0&gt;-&lt;265.0,288.0&gt;-&lt;316.0,311.0&gt;&gt; = 8.880659150520234

* sinK.virama: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKI: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKIi: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKRI: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKRIi: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKRa: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKSs.virama: B&lt;&lt;281.0,286.0&gt;-&lt;263.0,272.0&gt;-&lt;252.0,261.0&gt;&gt;/B&lt;&lt;252.0,261.0&gt;-&lt;289.0,288.0&gt;-&lt;339.5,311.0&gt;&gt; = 8.880659150520193

* sinKSsI: B&lt;&lt;296.0,286.0&gt;-&lt;278.0,272.0&gt;-&lt;267.0,261.0&gt;&gt;/B&lt;&lt;267.0,261.0&gt;-&lt;304.0,288.0&gt;-&lt;354.5,311.0&gt;&gt; = 8.880659150520193

* sinKSsIi: B&lt;&lt;296.0,286.0&gt;-&lt;278.0,272.0&gt;-&lt;267.0,261.0&gt;&gt;/B&lt;&lt;267.0,261.0&gt;-&lt;304.0,288.0&gt;-&lt;354.5,311.0&gt;&gt; = 8.880659150520193

* sinKSsU: B&lt;&lt;296.0,286.0&gt;-&lt;278.0,272.0&gt;-&lt;267.0,261.0&gt;&gt;/B&lt;&lt;267.0,261.0&gt;-&lt;304.0,288.0&gt;-&lt;354.5,311.0&gt;&gt; = 8.880659150520193

* sinKSsUu: B&lt;&lt;296.0,286.0&gt;-&lt;278.0,272.0&gt;-&lt;267.0,261.0&gt;&gt;/B&lt;&lt;267.0,261.0&gt;-&lt;304.0,288.0&gt;-&lt;354.5,311.0&gt;&gt; = 8.880659150520193

* sinKSsa.reph: B&lt;&lt;296.0,286.0&gt;-&lt;278.0,272.0&gt;-&lt;267.0,261.0&gt;&gt;/B&lt;&lt;267.0,261.0&gt;-&lt;304.0,288.0&gt;-&lt;354.5,311.0&gt;&gt; = 8.880659150520193

* sinKSsa: B&lt;&lt;296.0,286.0&gt;-&lt;278.0,272.0&gt;-&lt;267.0,261.0&gt;&gt;/B&lt;&lt;267.0,261.0&gt;-&lt;304.0,288.0&gt;-&lt;354.5,311.0&gt;&gt; = 8.880659150520193

* sinKU: B&lt;&lt;261.5,288.5&gt;-&lt;246.0,276.0&gt;-&lt;237.0,268.0&gt;&gt;/B&lt;&lt;237.0,268.0&gt;-&lt;262.0,285.0&gt;-&lt;292.5,301.5&gt;&gt; = 7.417837204132778

* sinKUu: B&lt;&lt;263.0,291.0&gt;-&lt;248.0,279.0&gt;-&lt;239.0,271.0&gt;&gt;/B&lt;&lt;239.0,271.0&gt;-&lt;276.0,297.0&gt;-&lt;325.0,319.5&gt;&gt; = 6.537722549544061

* sinKV.virama: B&lt;&lt;267.0,286.0&gt;-&lt;249.0,272.0&gt;-&lt;238.0,261.0&gt;&gt;/B&lt;&lt;238.0,261.0&gt;-&lt;275.0,288.0&gt;-&lt;325.5,311.0&gt;&gt; = 8.880659150520193

* sinKV.virama: B&lt;&lt;739.0,719.0&gt;-&lt;736.0,719.0&gt;-&lt;733.0,718.0&gt;&gt;/L&lt;&lt;733.0,718.0&gt;--&lt;739.0,719.0&gt;&gt; = 8.972626614896358

* sinKV.virama: L&lt;&lt;665.0,702.0&gt;--&lt;693.0,708.0&gt;&gt;/B&lt;&lt;693.0,708.0&gt;-&lt;677.0,706.0&gt;-&lt;671.0,704.0&gt;&gt; = 4.969740728110216

* sinKV.virama: L&lt;&lt;733.0,718.0&gt;--&lt;739.0,719.0&gt;&gt;/B&lt;&lt;739.0,719.0&gt;-&lt;736.0,719.0&gt;-&lt;733.0,718.0&gt;&gt; = 9.462322208025613

* sinKVI: B&lt;&lt;296.0,265.0&gt;-&lt;278.0,251.0&gt;-&lt;267.0,240.0&gt;&gt;/B&lt;&lt;267.0,240.0&gt;-&lt;304.0,267.0&gt;-&lt;354.5,290.0&gt;&gt; = 8.880659150520193

* sinKVIi: B&lt;&lt;296.0,265.0&gt;-&lt;278.0,251.0&gt;-&lt;267.0,240.0&gt;&gt;/B&lt;&lt;267.0,240.0&gt;-&lt;304.0,267.0&gt;-&lt;354.5,290.0&gt;&gt; = 8.880659150520193

* sinKVU: B&lt;&lt;296.5,285.0&gt;-&lt;279.0,272.0&gt;-&lt;268.0,260.0&gt;&gt;/B&lt;&lt;268.0,260.0&gt;-&lt;305.0,287.0&gt;-&lt;355.0,309.5&gt;&gt; = 11.370212072519402

* sinKVUu: B&lt;&lt;297.0,291.5&gt;-&lt;280.0,278.0&gt;-&lt;269.0,267.0&gt;&gt;/B&lt;&lt;269.0,267.0&gt;-&lt;305.0,294.0&gt;-&lt;355.5,316.0&gt;&gt; = 8.13010235415596

* sinKVa.reph: B&lt;&lt;267.0,286.0&gt;-&lt;249.0,272.0&gt;-&lt;238.0,261.0&gt;&gt;/B&lt;&lt;238.0,261.0&gt;-&lt;275.0,288.0&gt;-&lt;325.5,311.0&gt;&gt; = 8.880659150520193

* sinKVa: B&lt;&lt;267.0,286.0&gt;-&lt;249.0,272.0&gt;-&lt;238.0,261.0&gt;&gt;/B&lt;&lt;238.0,261.0&gt;-&lt;275.0,288.0&gt;-&lt;325.5,311.0&gt;&gt; = 8.880659150520193

* sinKa (U+0D9A): B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKa.reph: B&lt;&lt;281.5,281.0&gt;-&lt;266.0,269.0&gt;-&lt;257.0,260.0&gt;&gt;/B&lt;&lt;257.0,260.0&gt;-&lt;281.0,278.0&gt;-&lt;312.0,294.5&gt;&gt; = 8.13010235415596

* sinKh.virama: B&lt;&lt;176.5,652.5&gt;-&lt;186.0,674.0&gt;-&lt;194.0,688.0&gt;&gt;/L&lt;&lt;194.0,688.0&gt;--&lt;189.0,681.0&gt;&gt; = 5.792796495032087

* sinKhR.virama: B&lt;&lt;176.5,652.5&gt;-&lt;186.0,674.0&gt;-&lt;194.0,688.0&gt;&gt;/L&lt;&lt;194.0,688.0&gt;--&lt;189.0,681.0&gt;&gt; = 5.792796495032087

* sinKundaliya (U+0DF4): B&lt;&lt;460.5,72.0&gt;-&lt;453.0,118.0&gt;-&lt;450.0,171.0&gt;&gt;/B&lt;&lt;450.0,171.0&gt;-&lt;445.0,145.0&gt;-&lt;437.5,110.0&gt;&gt; = 14.125227350760875

* sinKundaliya (U+0DF4): B&lt;&lt;562.0,109.0&gt;-&lt;558.0,152.0&gt;-&lt;555.0,217.0&gt;&gt;/B&lt;&lt;555.0,217.0&gt;-&lt;553.0,190.0&gt;-&lt;546.5,152.0&gt;&gt; = 6.878940093123571

* sinKundaliya (U+0DF4): B&lt;&lt;590.5,181.5&gt;-&lt;592.0,141.0&gt;-&lt;597.0,88.0&gt;&gt;/B&lt;&lt;597.0,88.0&gt;-&lt;603.0,141.0&gt;-&lt;616.0,191.0&gt;&gt; = 11.848128138692037

* sinKundaliya (U+0DF4): B&lt;&lt;817.0,151.0&gt;-&lt;819.0,122.0&gt;-&lt;820.0,109.0&gt;&gt;/B&lt;&lt;820.0,109.0&gt;-&lt;821.0,123.0&gt;-&lt;829.5,149.5&gt;&gt; = 8.484322134970332

* sinKundaliya (U+0DF4): B&lt;&lt;880.0,196.5&gt;-&lt;880.0,201.0&gt;-&lt;881.0,205.0&gt;&gt;/B&lt;&lt;881.0,205.0&gt;-&lt;869.0,171.0&gt;-&lt;857.5,134.5&gt;&gt; = 5.403791360249728

* sinM.virama: B&lt;&lt;292.0,709.0&gt;-&lt;289.0,709.0&gt;-&lt;286.0,708.0&gt;&gt;/L&lt;&lt;286.0,708.0&gt;--&lt;292.0,709.0&gt;&gt; = 8.972626614896358

* sinM.virama: L&lt;&lt;218.0,692.0&gt;--&lt;246.0,698.0&gt;&gt;/B&lt;&lt;246.0,698.0&gt;-&lt;230.0,696.0&gt;-&lt;224.0,694.0&gt;&gt; = 4.969740728110216

* sinM.virama: L&lt;&lt;286.0,708.0&gt;--&lt;292.0,709.0&gt;&gt;/B&lt;&lt;292.0,709.0&gt;-&lt;289.0,709.0&gt;-&lt;286.0,708.0&gt;&gt; = 9.462322208025613

* sinMR.virama: B&lt;&lt;292.0,709.0&gt;-&lt;289.0,709.0&gt;-&lt;286.0,708.0&gt;&gt;/L&lt;&lt;286.0,708.0&gt;--&lt;292.0,709.0&gt;&gt; = 8.972626614896358

* sinMR.virama: L&lt;&lt;218.0,692.0&gt;--&lt;246.0,698.0&gt;&gt;/B&lt;&lt;246.0,698.0&gt;-&lt;230.0,696.0&gt;-&lt;224.0,694.0&gt;&gt; = 4.969740728110216

* sinMR.virama: L&lt;&lt;286.0,708.0&gt;--&lt;292.0,709.0&gt;&gt;/B&lt;&lt;292.0,709.0&gt;-&lt;289.0,709.0&gt;-&lt;286.0,708.0&gt;&gt; = 9.462322208025613

* sinMb.virama: L&lt;&lt;218.0,690.0&gt;--&lt;235.0,694.0&gt;&gt;/B&lt;&lt;235.0,694.0&gt;-&lt;227.0,693.0&gt;-&lt;222.5,691.5&gt;&gt; = 6.115503566285384

* sinN.virama: B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinND.virama: B&lt;&lt;288.5,281.5&gt;-&lt;280.0,273.0&gt;-&lt;271.0,264.0&gt;&gt;/B&lt;&lt;271.0,264.0&gt;-&lt;307.0,290.0&gt;-&lt;344.0,308.5&gt;&gt; = 9.162347045721626

* sinNDI: B&lt;&lt;288.5,281.5&gt;-&lt;280.0,273.0&gt;-&lt;271.0,264.0&gt;&gt;/B&lt;&lt;271.0,264.0&gt;-&lt;307.0,290.0&gt;-&lt;344.0,308.5&gt;&gt; = 9.162347045721626

* sinNDIi: B&lt;&lt;288.5,281.5&gt;-&lt;280.0,273.0&gt;-&lt;271.0,264.0&gt;&gt;/B&lt;&lt;271.0,264.0&gt;-&lt;307.0,290.0&gt;-&lt;344.0,308.5&gt;&gt; = 9.162347045721626

* sinNDRI: B&lt;&lt;284.0,274.5&gt;-&lt;274.0,263.0&gt;-&lt;264.0,251.0&gt;&gt;/B&lt;&lt;264.0,251.0&gt;-&lt;304.0,282.0&gt;-&lt;345.0,304.5&gt;&gt; = 12.418744601780118

* sinNDRIi: B&lt;&lt;284.0,274.5&gt;-&lt;274.0,263.0&gt;-&lt;264.0,251.0&gt;&gt;/B&lt;&lt;264.0,251.0&gt;-&lt;304.0,282.0&gt;-&lt;345.0,304.5&gt;&gt; = 12.418744601780118

* sinNDRa: B&lt;&lt;284.0,274.5&gt;-&lt;274.0,263.0&gt;-&lt;264.0,251.0&gt;&gt;/B&lt;&lt;264.0,251.0&gt;-&lt;304.0,282.0&gt;-&lt;345.0,304.5&gt;&gt; = 12.418744601780118

* sinNDU: B&lt;&lt;285.0,259.0&gt;-&lt;275.0,248.0&gt;-&lt;265.0,236.0&gt;&gt;/B&lt;&lt;265.0,236.0&gt;-&lt;304.0,266.0&gt;-&lt;345.0,288.0&gt;&gt; = 12.625836878907275

* sinNDUu: B&lt;&lt;285.0,274.5&gt;-&lt;275.0,263.0&gt;-&lt;264.0,251.0&gt;&gt;/B&lt;&lt;264.0,251.0&gt;-&lt;304.0,281.0&gt;-&lt;345.0,303.0&gt;&gt; = 10.61965527615514

* sinNDa.reph: B&lt;&lt;288.5,281.5&gt;-&lt;280.0,273.0&gt;-&lt;271.0,264.0&gt;&gt;/B&lt;&lt;271.0,264.0&gt;-&lt;307.0,290.0&gt;-&lt;344.0,308.5&gt;&gt; = 9.162347045721626

* sinNDa: B&lt;&lt;288.5,281.5&gt;-&lt;280.0,273.0&gt;-&lt;271.0,264.0&gt;&gt;/B&lt;&lt;271.0,264.0&gt;-&lt;307.0,290.0&gt;-&lt;344.0,308.5&gt;&gt; = 9.162347045721626

* sinNDh.virama: B&lt;&lt;276.0,265.5&gt;-&lt;266.0,254.0&gt;-&lt;255.0,242.0&gt;&gt;/B&lt;&lt;255.0,242.0&gt;-&lt;295.0,272.0&gt;-&lt;336.0,294.0&gt;&gt; = 10.61965527615514

* sinNDh.virama: B&lt;&lt;723.0,666.0&gt;-&lt;720.0,666.0&gt;-&lt;716.0,664.0&gt;&gt;/L&lt;&lt;716.0,664.0&gt;--&lt;723.0,666.0&gt;&gt; = 10.619655276155106

* sinNDh.virama: L&lt;&lt;649.0,648.0&gt;--&lt;673.0,654.0&gt;&gt;/B&lt;&lt;673.0,654.0&gt;-&lt;659.0,652.0&gt;-&lt;654.0,650.0&gt;&gt; = 5.906141113770497

* sinNDhI: B&lt;&lt;285.0,265.5&gt;-&lt;275.0,254.0&gt;-&lt;264.0,242.0&gt;&gt;/B&lt;&lt;264.0,242.0&gt;-&lt;304.0,272.0&gt;-&lt;345.0,294.0&gt;&gt; = 10.61965527615514

* sinNDhIi: B&lt;&lt;285.0,265.5&gt;-&lt;275.0,254.0&gt;-&lt;264.0,242.0&gt;&gt;/B&lt;&lt;264.0,242.0&gt;-&lt;304.0,272.0&gt;-&lt;345.0,294.0&gt;&gt; = 10.61965527615514

* sinNDhU: B&lt;&lt;260.0,265.5&gt;-&lt;250.0,254.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;279.0,272.0&gt;-&lt;320.0,294.0&gt;&gt; = 10.61965527615514

* sinNDhUu: B&lt;&lt;255.0,265.5&gt;-&lt;245.0,254.0&gt;-&lt;234.0,242.0&gt;&gt;/B&lt;&lt;234.0,242.0&gt;-&lt;274.0,272.0&gt;-&lt;315.0,294.0&gt;&gt; = 10.61965527615514

* sinNDha.reph: B&lt;&lt;255.0,265.5&gt;-&lt;245.0,254.0&gt;-&lt;234.0,242.0&gt;&gt;/B&lt;&lt;234.0,242.0&gt;-&lt;274.0,272.0&gt;-&lt;315.0,294.0&gt;&gt; = 10.61965527615514

* sinNDha: B&lt;&lt;255.0,265.5&gt;-&lt;245.0,254.0&gt;-&lt;234.0,242.0&gt;&gt;/B&lt;&lt;234.0,242.0&gt;-&lt;274.0,272.0&gt;-&lt;315.0,294.0&gt;&gt; = 10.61965527615514

* sinNI: B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinNIi: B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinNTh.virama: B&lt;&lt;288.0,282.0&gt;-&lt;287.0,281.0&gt;-&lt;284.0,279.0&gt;&gt;/B&lt;&lt;284.0,279.0&gt;-&lt;312.0,295.0&gt;-&lt;338.5,305.5&gt;&gt; = 3.9451862290374176

* sinNThI: B&lt;&lt;311.0,282.0&gt;-&lt;310.0,281.0&gt;-&lt;307.0,279.0&gt;&gt;/B&lt;&lt;307.0,279.0&gt;-&lt;335.0,295.0&gt;-&lt;361.5,305.5&gt;&gt; = 3.9451862290374176

* sinNThIi: B&lt;&lt;311.0,282.0&gt;-&lt;310.0,281.0&gt;-&lt;307.0,279.0&gt;&gt;/B&lt;&lt;307.0,279.0&gt;-&lt;335.0,295.0&gt;-&lt;361.5,305.5&gt;&gt; = 3.9451862290374176

* sinNThU: B&lt;&lt;312.0,291.0&gt;-&lt;310.0,289.0&gt;-&lt;306.0,285.0&gt;&gt;/B&lt;&lt;306.0,285.0&gt;-&lt;334.0,303.0&gt;-&lt;361.5,314.0&gt;&gt; = 12.26477372789237

* sinNThU: B&lt;&lt;335.5,397.5&gt;-&lt;330.0,381.0&gt;-&lt;321.0,365.0&gt;&gt;/B&lt;&lt;321.0,365.0&gt;-&lt;350.0,396.0&gt;-&lt;383.0,424.0&gt;&gt; = 13.73309402421234

* sinNThUu: B&lt;&lt;311.0,291.0&gt;-&lt;310.0,290.0&gt;-&lt;307.0,288.0&gt;&gt;/B&lt;&lt;307.0,288.0&gt;-&lt;335.0,304.0&gt;-&lt;361.5,314.5&gt;&gt; = 3.9451862290374176

* sinNTha.reph: B&lt;&lt;311.0,282.0&gt;-&lt;310.0,281.0&gt;-&lt;307.0,279.0&gt;&gt;/B&lt;&lt;307.0,279.0&gt;-&lt;335.0,295.0&gt;-&lt;361.5,305.5&gt;&gt; = 3.9451862290374176

* sinNTha: B&lt;&lt;311.0,282.0&gt;-&lt;310.0,281.0&gt;-&lt;307.0,279.0&gt;&gt;/B&lt;&lt;307.0,279.0&gt;-&lt;335.0,295.0&gt;-&lt;361.5,305.5&gt;&gt; = 3.9451862290374176

* sinNU: B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinNUu: B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinNV.virama: B&lt;&lt;285.0,251.0&gt;-&lt;275.0,240.0&gt;-&lt;265.0,228.0&gt;&gt;/B&lt;&lt;265.0,228.0&gt;-&lt;305.0,258.0&gt;-&lt;345.5,280.0&gt;&gt; = 13.324531261890755

* sinNV.virama: B&lt;&lt;712.0,719.0&gt;-&lt;709.0,719.0&gt;-&lt;706.0,718.0&gt;&gt;/L&lt;&lt;706.0,718.0&gt;--&lt;712.0,719.0&gt;&gt; = 8.972626614896358

* sinNV.virama: L&lt;&lt;638.0,702.0&gt;--&lt;666.0,708.0&gt;&gt;/B&lt;&lt;666.0,708.0&gt;-&lt;650.0,706.0&gt;-&lt;644.0,704.0&gt;&gt; = 4.969740728110216

* sinNV.virama: L&lt;&lt;706.0,718.0&gt;--&lt;712.0,719.0&gt;&gt;/B&lt;&lt;712.0,719.0&gt;-&lt;709.0,719.0&gt;-&lt;706.0,718.0&gt;&gt; = 9.462322208025613

* sinNVI: B&lt;&lt;285.0,251.0&gt;-&lt;275.0,240.0&gt;-&lt;265.0,228.0&gt;&gt;/B&lt;&lt;265.0,228.0&gt;-&lt;305.0,258.0&gt;-&lt;345.5,280.0&gt;&gt; = 13.324531261890755

* sinNVIi: B&lt;&lt;285.5,249.5&gt;-&lt;276.0,239.0&gt;-&lt;266.0,227.0&gt;&gt;/B&lt;&lt;266.0,227.0&gt;-&lt;305.0,257.0&gt;-&lt;346.0,278.5&gt;&gt; = 12.625836878907275

* sinNVU: B&lt;&lt;274.0,267.5&gt;-&lt;264.0,256.0&gt;-&lt;254.0,244.0&gt;&gt;/B&lt;&lt;254.0,244.0&gt;-&lt;294.0,274.0&gt;-&lt;335.0,296.5&gt;&gt; = 13.324531261890755

* sinNVU: B&lt;&lt;506.0,142.0&gt;-&lt;506.0,146.0&gt;-&lt;506.0,149.0&gt;&gt;/B&lt;&lt;506.0,149.0&gt;-&lt;488.0,73.0&gt;-&lt;424.5,30.5&gt;&gt; = 13.324531261890783

* sinNVUu: B&lt;&lt;285.0,274.5&gt;-&lt;275.0,263.0&gt;-&lt;264.0,251.0&gt;&gt;/B&lt;&lt;264.0,251.0&gt;-&lt;304.0,281.0&gt;-&lt;345.0,303.0&gt;&gt; = 10.61965527615514

* sinNVa.reph: B&lt;&lt;285.0,251.0&gt;-&lt;275.0,240.0&gt;-&lt;265.0,228.0&gt;&gt;/B&lt;&lt;265.0,228.0&gt;-&lt;305.0,258.0&gt;-&lt;345.5,280.0&gt;&gt; = 13.324531261890755

* sinNVa: B&lt;&lt;285.0,251.0&gt;-&lt;275.0,240.0&gt;-&lt;265.0,228.0&gt;&gt;/B&lt;&lt;265.0,228.0&gt;-&lt;305.0,258.0&gt;-&lt;345.5,280.0&gt;&gt; = 13.324531261890755

* sinNa (U+0DB1): B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinNa.reph: B&lt;&lt;258.0,264.0&gt;-&lt;248.0,253.0&gt;-&lt;239.0,242.0&gt;&gt;/B&lt;&lt;239.0,242.0&gt;-&lt;278.0,272.0&gt;-&lt;319.0,294.0&gt;&gt; = 13.142001108672124

* sinNndd.virama: B&lt;&lt;250.5,233.5&gt;-&lt;277.0,271.0&gt;-&lt;321.0,291.0&gt;&gt;/B&lt;&lt;321.0,291.0&gt;-&lt;267.0,276.0&gt;-&lt;233.5,257.5&gt;&gt; = 8.919843783662243

* sinNnddI: B&lt;&lt;280.5,226.5&gt;-&lt;308.0,244.0&gt;-&lt;340.0,255.0&gt;&gt;/B&lt;&lt;340.0,255.0&gt;-&lt;278.0,240.0&gt;-&lt;232.0,219.5&gt;&gt; = 5.369865291827683

* sinNnddIi: B&lt;&lt;322.0,232.0&gt;-&lt;362.0,249.0&gt;-&lt;401.0,260.0&gt;&gt;/B&lt;&lt;401.0,260.0&gt;-&lt;324.0,247.0&gt;-&lt;266.5,222.5&gt;&gt; = 6.168228939920462

* sinNnddU: B&lt;&lt;244.5,233.5&gt;-&lt;271.0,271.0&gt;-&lt;315.0,291.0&gt;&gt;/B&lt;&lt;315.0,291.0&gt;-&lt;261.0,276.0&gt;-&lt;227.5,257.5&gt;&gt; = 8.919843783662243

* sinNnddUu: B&lt;&lt;250.5,233.5&gt;-&lt;277.0,271.0&gt;-&lt;321.0,291.0&gt;&gt;/B&lt;&lt;321.0,291.0&gt;-&lt;267.0,276.0&gt;-&lt;233.5,257.5&gt;&gt; = 8.919843783662243

* sinNndda (U+0DAC): B&lt;&lt;240.5,233.5&gt;-&lt;267.0,271.0&gt;-&lt;311.0,291.0&gt;&gt;/B&lt;&lt;311.0,291.0&gt;-&lt;257.0,276.0&gt;-&lt;223.5,257.5&gt;&gt; = 8.919843783662243

* sinNndda.reph: B&lt;&lt;240.5,233.5&gt;-&lt;267.0,271.0&gt;-&lt;311.0,291.0&gt;&gt;/B&lt;&lt;311.0,291.0&gt;-&lt;257.0,276.0&gt;-&lt;223.5,257.5&gt;&gt; = 8.919843783662243

* sinNy.virama: B&lt;&lt;393.5,289.0&gt;-&lt;377.0,276.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;393.0,286.0&gt;-&lt;424.5,303.0&gt;&gt; = 5.879652082133404

* sinNyI: B&lt;&lt;393.5,289.0&gt;-&lt;377.0,276.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;393.0,286.0&gt;-&lt;424.5,303.0&gt;&gt; = 5.879652082133404

* sinNyIi: B&lt;&lt;393.5,289.0&gt;-&lt;377.0,276.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;393.0,286.0&gt;-&lt;424.5,303.0&gt;&gt; = 5.879652082133404

* sinNyR.virama: B&lt;&lt;400.0,294.5&gt;-&lt;381.0,280.0&gt;-&lt;370.0,269.0&gt;&gt;/B&lt;&lt;370.0,269.0&gt;-&lt;407.0,296.0&gt;-&lt;458.5,319.5&gt;&gt; = 8.880659150520193

* sinNyRI: B&lt;&lt;398.0,293.5&gt;-&lt;378.0,278.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;392.0,286.0&gt;-&lt;424.0,303.0&gt;&gt; = 8.13010235415596

* sinNyRIi: B&lt;&lt;434.0,293.5&gt;-&lt;414.0,278.0&gt;-&lt;404.0,268.0&gt;&gt;/B&lt;&lt;404.0,268.0&gt;-&lt;428.0,286.0&gt;-&lt;460.0,303.0&gt;&gt; = 8.13010235415596

* sinNyRa: B&lt;&lt;398.0,293.5&gt;-&lt;378.0,278.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;392.0,286.0&gt;-&lt;424.0,303.0&gt;&gt; = 8.13010235415596

* sinNyU: B&lt;&lt;393.5,289.0&gt;-&lt;377.0,276.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;393.0,286.0&gt;-&lt;424.5,303.0&gt;&gt; = 5.879652082133404

* sinNyUu: B&lt;&lt;399.0,292.5&gt;-&lt;385.0,281.0&gt;-&lt;375.0,273.0&gt;&gt;/B&lt;&lt;375.0,273.0&gt;-&lt;412.0,299.0&gt;-&lt;461.0,321.0&gt;&gt; = 3.563991467063822

* sinNya (U+0DA4): B&lt;&lt;393.5,289.0&gt;-&lt;377.0,276.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;393.0,286.0&gt;-&lt;424.5,303.0&gt;&gt; = 5.879652082133404

* sinNya.reph: B&lt;&lt;393.5,289.0&gt;-&lt;377.0,276.0&gt;-&lt;368.0,268.0&gt;&gt;/B&lt;&lt;368.0,268.0&gt;-&lt;393.0,286.0&gt;-&lt;424.5,303.0&gt;&gt; = 5.879652082133404

* sinR.virama: B&lt;&lt;206.5,424.5&gt;-&lt;168.0,399.0&gt;-&lt;143.0,375.0&gt;&gt;/B&lt;&lt;143.0,375.0&gt;-&lt;170.0,400.0&gt;-&lt;216.0,424.0&gt;&gt; = 1.0334588338579653

* sinRAae: B&lt;&lt;206.5,424.5&gt;-&lt;168.0,399.0&gt;-&lt;143.0,375.0&gt;&gt;/B&lt;&lt;143.0,375.0&gt;-&lt;170.0,400.0&gt;-&lt;216.0,424.0&gt;&gt; = 1.0334588338579653

* sinRAe: B&lt;&lt;199.5,434.0&gt;-&lt;152.0,404.0&gt;-&lt;123.0,375.0&gt;&gt;/B&lt;&lt;123.0,375.0&gt;-&lt;150.0,400.0&gt;-&lt;196.0,424.0&gt;&gt; = 2.2025981617654704

* sinRI: B&lt;&lt;230.5,424.5&gt;-&lt;192.0,399.0&gt;-&lt;167.0,375.0&gt;&gt;/B&lt;&lt;167.0,375.0&gt;-&lt;194.0,400.0&gt;-&lt;240.0,424.0&gt;&gt; = 1.0334588338579653

* sinRIi: B&lt;&lt;206.5,424.5&gt;-&lt;168.0,399.0&gt;-&lt;143.0,375.0&gt;&gt;/B&lt;&lt;143.0,375.0&gt;-&lt;170.0,400.0&gt;-&lt;216.0,424.0&gt;&gt; = 1.0334588338579653

* sinRU: B&lt;&lt;206.5,424.5&gt;-&lt;168.0,399.0&gt;-&lt;143.0,375.0&gt;&gt;/B&lt;&lt;143.0,375.0&gt;-&lt;170.0,400.0&gt;-&lt;216.0,424.0&gt;&gt; = 1.0334588338579653

* sinRUu: B&lt;&lt;216.5,424.5&gt;-&lt;178.0,399.0&gt;-&lt;153.0,375.0&gt;&gt;/B&lt;&lt;153.0,375.0&gt;-&lt;180.0,400.0&gt;-&lt;226.0,424.0&gt;&gt; = 1.0334588338579653

* sinRa (U+0DBB): B&lt;&lt;206.5,424.5&gt;-&lt;168.0,399.0&gt;-&lt;143.0,375.0&gt;&gt;/B&lt;&lt;143.0,375.0&gt;-&lt;170.0,400.0&gt;-&lt;216.0,424.0&gt;&gt; = 1.0334588338579653

* sinS.virama: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSI: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSIi: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSR.virama: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSRI: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSRIi: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSRa: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSU: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSUu: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSa (U+0DC3): B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinSa.reph: B&lt;&lt;121.5,246.5&gt;-&lt;157.0,284.0&gt;-&lt;207.0,305.0&gt;&gt;/B&lt;&lt;207.0,305.0&gt;-&lt;144.0,294.0&gt;-&lt;98.0,273.5&gt;&gt; = 12.878222517507803

* sinT.virama: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinT.virama: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinT.virama: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTI: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTI: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTI: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTIi: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTIi: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTIi: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTR.virama: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTR.virama: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTR.virama: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTRI: B&lt;&lt;270.0,297.0&gt;-&lt;239.0,273.0&gt;-&lt;223.0,256.0&gt;&gt;/B&lt;&lt;223.0,256.0&gt;-&lt;231.0,263.0&gt;-&lt;235.0,265.5&gt;&gt; = 5.549779423218771

* sinTRI: B&lt;&lt;276.5,372.5&gt;-&lt;267.0,350.0&gt;-&lt;255.0,331.0&gt;&gt;/B&lt;&lt;255.0,331.0&gt;-&lt;257.0,333.0&gt;-&lt;260.0,336.0&gt;&gt; = 12.724355685422363

* sinTRI: B&lt;&lt;74.0,62.0&gt;-&lt;72.0,59.0&gt;-&lt;71.0,55.0&gt;&gt;/B&lt;&lt;71.0,55.0&gt;-&lt;71.0,56.0&gt;-&lt;63.0,60.5&gt;&gt; = 14.036243467926484

* sinTRIi: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTRIi: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTRIi: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTRa: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTRa: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTRa: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTTh.virama: B&lt;&lt;258.5,278.0&gt;-&lt;244.0,265.0&gt;-&lt;236.0,257.0&gt;&gt;/B&lt;&lt;236.0,257.0&gt;-&lt;252.0,269.0&gt;-&lt;266.5,277.5&gt;&gt; = 8.13010235415596

* sinTTh.virama: B&lt;&lt;290.0,374.0&gt;-&lt;281.0,352.0&gt;-&lt;269.0,333.0&gt;&gt;/B&lt;&lt;269.0,333.0&gt;-&lt;271.0,335.0&gt;-&lt;273.0,337.0&gt;&gt; = 12.724355685422363

* sinTTh.virama: B&lt;&lt;85.0,59.0&gt;-&lt;83.0,55.0&gt;-&lt;82.0,51.0&gt;&gt;/B&lt;&lt;82.0,51.0&gt;-&lt;82.0,52.0&gt;-&lt;74.0,56.5&gt;&gt; = 14.036243467926484

* sinTThI: B&lt;&lt;258.5,278.0&gt;-&lt;244.0,265.0&gt;-&lt;236.0,257.0&gt;&gt;/B&lt;&lt;236.0,257.0&gt;-&lt;252.0,269.0&gt;-&lt;266.5,277.5&gt;&gt; = 8.13010235415596

* sinTThI: B&lt;&lt;290.0,374.0&gt;-&lt;281.0,352.0&gt;-&lt;269.0,333.0&gt;&gt;/B&lt;&lt;269.0,333.0&gt;-&lt;271.0,335.0&gt;-&lt;273.0,337.0&gt;&gt; = 12.724355685422363

* sinTThI: B&lt;&lt;85.0,59.0&gt;-&lt;83.0,55.0&gt;-&lt;82.0,51.0&gt;&gt;/B&lt;&lt;82.0,51.0&gt;-&lt;82.0,52.0&gt;-&lt;74.0,56.5&gt;&gt; = 14.036243467926484

* sinTThIi: B&lt;&lt;258.5,278.0&gt;-&lt;244.0,265.0&gt;-&lt;236.0,257.0&gt;&gt;/B&lt;&lt;236.0,257.0&gt;-&lt;252.0,269.0&gt;-&lt;266.5,277.5&gt;&gt; = 8.13010235415596

* sinTThIi: B&lt;&lt;290.0,374.0&gt;-&lt;281.0,352.0&gt;-&lt;269.0,333.0&gt;&gt;/B&lt;&lt;269.0,333.0&gt;-&lt;271.0,335.0&gt;-&lt;273.0,337.0&gt;&gt; = 12.724355685422363

* sinTThIi: B&lt;&lt;85.0,59.0&gt;-&lt;83.0,55.0&gt;-&lt;82.0,51.0&gt;&gt;/B&lt;&lt;82.0,51.0&gt;-&lt;82.0,52.0&gt;-&lt;74.0,56.5&gt;&gt; = 14.036243467926484

* sinTThU: B&lt;&lt;258.5,285.5&gt;-&lt;244.0,272.0&gt;-&lt;236.0,264.0&gt;&gt;/B&lt;&lt;236.0,264.0&gt;-&lt;252.0,277.0&gt;-&lt;266.5,286.0&gt;&gt; = 5.906141113770497

* sinTThU: B&lt;&lt;289.0,380.5&gt;-&lt;279.0,358.0&gt;-&lt;267.0,338.0&gt;&gt;/B&lt;&lt;267.0,338.0&gt;-&lt;270.0,341.0&gt;-&lt;273.0,344.0&gt;&gt; = 14.036243467926457

* sinTThU: B&lt;&lt;85.0,67.0&gt;-&lt;83.0,63.0&gt;-&lt;82.0,59.0&gt;&gt;/B&lt;&lt;82.0,59.0&gt;-&lt;82.0,60.0&gt;-&lt;74.0,64.5&gt;&gt; = 14.036243467926484

* sinTThUu: B&lt;&lt;258.5,286.5&gt;-&lt;244.0,273.0&gt;-&lt;236.0,265.0&gt;&gt;/B&lt;&lt;236.0,265.0&gt;-&lt;252.0,278.0&gt;-&lt;266.5,286.5&gt;&gt; = 5.906141113770497

* sinTThUu: B&lt;&lt;290.0,383.0&gt;-&lt;281.0,361.0&gt;-&lt;269.0,342.0&gt;&gt;/B&lt;&lt;269.0,342.0&gt;-&lt;271.0,344.0&gt;-&lt;273.0,346.0&gt;&gt; = 12.724355685422363

* sinTThUu: B&lt;&lt;85.0,68.0&gt;-&lt;83.0,64.0&gt;-&lt;82.0,60.0&gt;&gt;/B&lt;&lt;82.0,60.0&gt;-&lt;82.0,61.0&gt;-&lt;74.0,65.5&gt;&gt; = 14.036243467926484

* sinTTha.reph: B&lt;&lt;258.5,278.0&gt;-&lt;244.0,265.0&gt;-&lt;236.0,257.0&gt;&gt;/B&lt;&lt;236.0,257.0&gt;-&lt;252.0,269.0&gt;-&lt;266.5,277.5&gt;&gt; = 8.13010235415596

* sinTTha.reph: B&lt;&lt;290.0,374.0&gt;-&lt;281.0,352.0&gt;-&lt;269.0,333.0&gt;&gt;/B&lt;&lt;269.0,333.0&gt;-&lt;271.0,335.0&gt;-&lt;273.0,337.0&gt;&gt; = 12.724355685422363

* sinTTha.reph: B&lt;&lt;85.0,59.0&gt;-&lt;83.0,55.0&gt;-&lt;82.0,51.0&gt;&gt;/B&lt;&lt;82.0,51.0&gt;-&lt;82.0,52.0&gt;-&lt;74.0,56.5&gt;&gt; = 14.036243467926484

* sinTTha: B&lt;&lt;258.5,278.0&gt;-&lt;244.0,265.0&gt;-&lt;236.0,257.0&gt;&gt;/B&lt;&lt;236.0,257.0&gt;-&lt;252.0,269.0&gt;-&lt;266.5,277.5&gt;&gt; = 8.13010235415596

* sinTTha: B&lt;&lt;290.0,374.0&gt;-&lt;281.0,352.0&gt;-&lt;269.0,333.0&gt;&gt;/B&lt;&lt;269.0,333.0&gt;-&lt;271.0,335.0&gt;-&lt;273.0,337.0&gt;&gt; = 12.724355685422363

* sinTTha: B&lt;&lt;85.0,59.0&gt;-&lt;83.0,55.0&gt;-&lt;82.0,51.0&gt;&gt;/B&lt;&lt;82.0,51.0&gt;-&lt;82.0,52.0&gt;-&lt;74.0,56.5&gt;&gt; = 14.036243467926484

* sinTU: B&lt;&lt;230.5,282.0&gt;-&lt;219.0,272.0&gt;-&lt;211.0,263.0&gt;&gt;/B&lt;&lt;211.0,263.0&gt;-&lt;219.0,270.0&gt;-&lt;223.0,273.0&gt;&gt; = 7.180535497720208

* sinTU: B&lt;&lt;264.5,381.0&gt;-&lt;255.0,359.0&gt;-&lt;243.0,339.0&gt;&gt;/B&lt;&lt;243.0,339.0&gt;-&lt;245.0,342.0&gt;-&lt;248.0,344.0&gt;&gt; = 2.726310993906212

* sinTU: B&lt;&lt;62.0,70.0&gt;-&lt;60.0,66.0&gt;-&lt;59.0,62.0&gt;&gt;/B&lt;&lt;59.0,62.0&gt;-&lt;59.0,63.0&gt;-&lt;51.0,67.5&gt;&gt; = 14.036243467926484

* sinTUu: B&lt;&lt;258.0,306.0&gt;-&lt;226.0,281.0&gt;-&lt;211.0,264.0&gt;&gt;/B&lt;&lt;211.0,264.0&gt;-&lt;219.0,271.0&gt;-&lt;223.0,274.0&gt;&gt; = 7.390409209287742

* sinTUu: B&lt;&lt;264.5,381.5&gt;-&lt;255.0,359.0&gt;-&lt;243.0,340.0&gt;&gt;/B&lt;&lt;243.0,340.0&gt;-&lt;245.0,342.0&gt;-&lt;248.0,345.0&gt;&gt; = 12.724355685422363

* sinTUu: B&lt;&lt;62.0,72.0&gt;-&lt;60.0,68.0&gt;-&lt;59.0,64.0&gt;&gt;/B&lt;&lt;59.0,64.0&gt;-&lt;59.0,65.0&gt;-&lt;51.0,69.5&gt;&gt; = 14.036243467926484

* sinTV.virama: B&lt;&lt;120.0,53.0&gt;-&lt;118.0,49.0&gt;-&lt;117.0,45.0&gt;&gt;/B&lt;&lt;117.0,45.0&gt;-&lt;117.0,46.0&gt;-&lt;109.0,51.0&gt;&gt; = 14.036243467926484

* sinTV.virama: B&lt;&lt;293.5,271.5&gt;-&lt;279.0,258.0&gt;-&lt;271.0,250.0&gt;&gt;/B&lt;&lt;271.0,250.0&gt;-&lt;287.0,264.0&gt;-&lt;301.5,272.5&gt;&gt; = 3.8140748342903783

* sinTV.virama: B&lt;&lt;324.0,368.0&gt;-&lt;314.0,345.0&gt;-&lt;302.0,325.0&gt;&gt;/B&lt;&lt;302.0,325.0&gt;-&lt;305.0,328.0&gt;-&lt;308.0,331.0&gt;&gt; = 14.036243467926457

* sinTV.virama: B&lt;&lt;760.0,719.0&gt;-&lt;757.0,719.0&gt;-&lt;754.0,718.0&gt;&gt;/L&lt;&lt;754.0,718.0&gt;--&lt;760.0,719.0&gt;&gt; = 8.972626614896358

* sinTV.virama: L&lt;&lt;686.0,702.0&gt;--&lt;714.0,708.0&gt;&gt;/B&lt;&lt;714.0,708.0&gt;-&lt;698.0,706.0&gt;-&lt;692.0,704.0&gt;&gt; = 4.969740728110216

* sinTV.virama: L&lt;&lt;754.0,718.0&gt;--&lt;760.0,719.0&gt;&gt;/B&lt;&lt;760.0,719.0&gt;-&lt;757.0,719.0&gt;-&lt;754.0,718.0&gt;&gt; = 9.462322208025613

* sinTVI: B&lt;&lt;246.5,278.0&gt;-&lt;232.0,265.0&gt;-&lt;224.0,257.0&gt;&gt;/B&lt;&lt;224.0,257.0&gt;-&lt;240.0,269.0&gt;-&lt;254.5,277.5&gt;&gt; = 8.13010235415596

* sinTVI: B&lt;&lt;277.5,374.0&gt;-&lt;268.0,352.0&gt;-&lt;256.0,332.0&gt;&gt;/B&lt;&lt;256.0,332.0&gt;-&lt;258.0,335.0&gt;-&lt;261.0,337.0&gt;&gt; = 2.726310993906212

* sinTVI: B&lt;&lt;73.0,59.0&gt;-&lt;71.0,55.0&gt;-&lt;70.0,51.0&gt;&gt;/B&lt;&lt;70.0,51.0&gt;-&lt;70.0,52.0&gt;-&lt;62.0,56.5&gt;&gt; = 14.036243467926484

* sinTVIi: B&lt;&lt;253.5,278.0&gt;-&lt;239.0,265.0&gt;-&lt;231.0,257.0&gt;&gt;/B&lt;&lt;231.0,257.0&gt;-&lt;247.0,269.0&gt;-&lt;261.5,278.0&gt;&gt; = 8.13010235415596

* sinTVIi: B&lt;&lt;284.5,374.0&gt;-&lt;275.0,352.0&gt;-&lt;263.0,332.0&gt;&gt;/B&lt;&lt;263.0,332.0&gt;-&lt;265.0,335.0&gt;-&lt;268.0,337.0&gt;&gt; = 2.726310993906212

* sinTVIi: B&lt;&lt;80.0,59.0&gt;-&lt;78.0,55.0&gt;-&lt;77.0,51.0&gt;&gt;/B&lt;&lt;77.0,51.0&gt;-&lt;77.0,52.0&gt;-&lt;69.0,56.5&gt;&gt; = 14.036243467926484

* sinTVU: B&lt;&lt;253.5,285.5&gt;-&lt;239.0,272.0&gt;-&lt;231.0,264.0&gt;&gt;/B&lt;&lt;231.0,264.0&gt;-&lt;247.0,278.0&gt;-&lt;261.5,286.5&gt;&gt; = 3.8140748342903783

* sinTVU: B&lt;&lt;80.0,67.0&gt;-&lt;78.0,64.0&gt;-&lt;77.0,60.0&gt;&gt;/B&lt;&lt;77.0,60.0&gt;-&lt;77.0,61.0&gt;-&lt;69.0,65.5&gt;&gt; = 14.036243467926484

* sinTVUu: B&lt;&lt;253.5,286.5&gt;-&lt;239.0,273.0&gt;-&lt;231.0,265.0&gt;&gt;/B&lt;&lt;231.0,265.0&gt;-&lt;247.0,278.0&gt;-&lt;261.5,286.5&gt;&gt; = 5.906141113770497

* sinTVUu: B&lt;&lt;80.0,68.0&gt;-&lt;78.0,64.0&gt;-&lt;77.0,60.0&gt;&gt;/B&lt;&lt;77.0,60.0&gt;-&lt;77.0,61.0&gt;-&lt;69.0,65.5&gt;&gt; = 14.036243467926484

* sinTVa.reph: B&lt;&lt;246.5,278.0&gt;-&lt;232.0,265.0&gt;-&lt;224.0,257.0&gt;&gt;/B&lt;&lt;224.0,257.0&gt;-&lt;240.0,269.0&gt;-&lt;254.5,277.5&gt;&gt; = 8.13010235415596

* sinTVa.reph: B&lt;&lt;73.0,59.0&gt;-&lt;71.0,55.0&gt;-&lt;70.0,51.0&gt;&gt;/B&lt;&lt;70.0,51.0&gt;-&lt;70.0,52.0&gt;-&lt;62.0,56.5&gt;&gt; = 14.036243467926484

* sinTVa: B&lt;&lt;246.5,278.0&gt;-&lt;232.0,265.0&gt;-&lt;224.0,257.0&gt;&gt;/B&lt;&lt;224.0,257.0&gt;-&lt;240.0,269.0&gt;-&lt;254.5,277.5&gt;&gt; = 8.13010235415596

* sinTVa: B&lt;&lt;73.0,59.0&gt;-&lt;71.0,55.0&gt;-&lt;70.0,51.0&gt;&gt;/B&lt;&lt;70.0,51.0&gt;-&lt;70.0,52.0&gt;-&lt;62.0,56.5&gt;&gt; = 14.036243467926484

* sinTa (U+0DAD): B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTa (U+0DAD): B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTa (U+0DAD): B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinTa.reph: B&lt;&lt;258.0,297.0&gt;-&lt;227.0,273.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;219.0,263.0&gt;-&lt;223.0,265.5&gt;&gt; = 5.549779423218771

* sinTa.reph: B&lt;&lt;264.5,372.5&gt;-&lt;255.0,350.0&gt;-&lt;243.0,331.0&gt;&gt;/B&lt;&lt;243.0,331.0&gt;-&lt;245.0,333.0&gt;-&lt;248.0,336.0&gt;&gt; = 12.724355685422363

* sinTa.reph: B&lt;&lt;62.0,62.0&gt;-&lt;60.0,59.0&gt;-&lt;59.0,55.0&gt;&gt;/B&lt;&lt;59.0,55.0&gt;-&lt;59.0,56.0&gt;-&lt;51.0,60.5&gt;&gt; = 14.036243467926484

* sinV.virama: B&lt;&lt;275.0,719.0&gt;-&lt;272.0,719.0&gt;-&lt;269.0,718.0&gt;&gt;/L&lt;&lt;269.0,718.0&gt;--&lt;275.0,719.0&gt;&gt; = 8.972626614896358

* sinV.virama: L&lt;&lt;201.0,702.0&gt;--&lt;229.0,708.0&gt;&gt;/B&lt;&lt;229.0,708.0&gt;-&lt;213.0,706.0&gt;-&lt;207.0,704.0&gt;&gt; = 4.969740728110216

* sinV.virama: L&lt;&lt;269.0,718.0&gt;--&lt;275.0,719.0&gt;&gt;/B&lt;&lt;275.0,719.0&gt;-&lt;272.0,719.0&gt;-&lt;269.0,718.0&gt;&gt; = 9.462322208025613

* sinVR.virama: B&lt;&lt;275.0,719.0&gt;-&lt;272.0,719.0&gt;-&lt;269.0,718.0&gt;&gt;/L&lt;&lt;269.0,718.0&gt;--&lt;275.0,719.0&gt;&gt; = 8.972626614896358

* sinVR.virama: L&lt;&lt;201.0,702.0&gt;--&lt;229.0,708.0&gt;&gt;/B&lt;&lt;229.0,708.0&gt;-&lt;213.0,706.0&gt;-&lt;207.0,704.0&gt;&gt; = 4.969740728110216

* sinVR.virama: L&lt;&lt;269.0,718.0&gt;--&lt;275.0,719.0&gt;&gt;/B&lt;&lt;275.0,719.0&gt;-&lt;272.0,719.0&gt;-&lt;269.0,718.0&gt;&gt; = 9.462322208025613

* trademark (U+2122): B&lt;&lt;315.0,531.5&gt;-&lt;312.0,543.0&gt;-&lt;311.0,548.0&gt;&gt;/L&lt;&lt;311.0,548.0&gt;--&lt;309.0,487.0&gt;&gt; = 13.18780992130553

* u111E5 (U+111E5): B&lt;&lt;533.0,316.0&gt;-&lt;580.0,261.0&gt;-&lt;604.0,171.0&gt;&gt;/B&lt;&lt;604.0,171.0&gt;-&lt;603.0,202.0&gt;-&lt;618.5,225.0&gt;&gt; = 13.083806912142956

* u111E9 (U+111E9): B&lt;&lt;973.0,306.5&gt;-&lt;1015.0,217.0&gt;-&lt;1033.0,112.0&gt;&gt;/L&lt;&lt;1033.0,112.0&gt;--&lt;1033.0,424.0&gt;&gt; = 9.727578551401587

* u111EF (U+111EF): B&lt;&lt;745.0,271.0&gt;-&lt;755.0,230.0&gt;-&lt;760.0,190.0&gt;&gt;/L&lt;&lt;760.0,190.0&gt;--&lt;760.0,421.0&gt;&gt; = 7.125016348901757

* u111F3 (U+111F3): B&lt;&lt;1038.0,269.0&gt;-&lt;1048.0,228.0&gt;-&lt;1054.0,187.0&gt;&gt;/L&lt;&lt;1054.0,187.0&gt;--&lt;1054.0,421.0&gt;&gt; = 8.325650330426804

* uni0DE8 (U+0DE8): B&lt;&lt;580.5,122.0&gt;-&lt;577.0,104.0&gt;-&lt;576.0,98.0&gt;&gt;/L&lt;&lt;576.0,98.0&gt;--&lt;576.0,99.0&gt;&gt; = 9.462322208025613

* uni0DE8 (U+0DE8): L&lt;&lt;576.0,98.0&gt;--&lt;576.0,99.0&gt;&gt;/B&lt;&lt;576.0,99.0&gt;-&lt;569.0,67.0&gt;-&lt;559.5,38.5&gt;&gt; = 12.33908727832618

* uni0DE9 (U+0DE9): B&lt;&lt;580.5,122.0&gt;-&lt;577.0,104.0&gt;-&lt;576.0,98.0&gt;&gt;/L&lt;&lt;576.0,98.0&gt;--&lt;576.0,99.0&gt;&gt; = 9.462322208025613

* uni0DE9 (U+0DE9): L&lt;&lt;576.0,98.0&gt;--&lt;576.0,99.0&gt;&gt;/B&lt;&lt;576.0,99.0&gt;-&lt;569.0,67.0&gt;-&lt;559.5,38.5&gt;&gt; = 12.33908727832618

* uni0DEF (U+0DEF): B&lt;&lt;580.5,122.0&gt;-&lt;577.0,104.0&gt;-&lt;576.0,98.0&gt;&gt;/L&lt;&lt;576.0,98.0&gt;--&lt;576.0,99.0&gt;&gt; = 9.462322208025613

* uni0DEF (U+0DEF): L&lt;&lt;576.0,98.0&gt;--&lt;576.0,99.0&gt;&gt;/B&lt;&lt;576.0,99.0&gt;-&lt;569.0,67.0&gt;-&lt;559.5,38.5&gt;&gt; = 12.33908727832618
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/outline.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* D (U+0044): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* Dcaron (U+010E): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* Dcroat (U+0110): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* Eng (U+014A): L&lt;&lt;269.0,0.0&gt;--&lt;30.0,-1.0&gt;&gt;

* Eth (U+00D0): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* ae (U+00E6): L&lt;&lt;719.0,225.0&gt;--&lt;414.0,223.0&gt;&gt;

* aeacute (U+01FD): L&lt;&lt;719.0,225.0&gt;--&lt;414.0,223.0&gt;&gt;

* bracketleft (U+005B): L&lt;&lt;62.0,633.0&gt;--&lt;222.0,632.0&gt;&gt;

* bracketright (U+005D): L&lt;&lt;138.0,632.0&gt;--&lt;298.0,633.0&gt;&gt;

* e (U+0065): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* eacute (U+00E9): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* ebreve (U+0115): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* ecaron (U+011B): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* ecircumflex (U+00EA): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* edieresis (U+00EB): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* edotaccent (U+0117): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* egrave (U+00E8): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* emacron (U+0113): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* eogonek (U+0119): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* kgreenlandic (U+0138): L&lt;&lt;347.0,0.0&gt;--&lt;122.0,-1.0&gt;&gt;

* oe (U+0153): L&lt;&lt;786.0,225.0&gt;--&lt;481.0,223.0&gt;&gt;

* sinBUu: L&lt;&lt;633.0,134.0&gt;--&lt;635.0,-238.0&gt;&gt;

* sinBhR.virama: L&lt;&lt;581.0,471.0&gt;--&lt;583.0,713.0&gt;&gt;

* sinDDhUu: L&lt;&lt;763.0,110.0&gt;--&lt;765.0,-238.0&gt;&gt;

* sinDU: L&lt;&lt;454.0,-240.0&gt;--&lt;196.0,-242.0&gt;&gt;

* sinDVU: L&lt;&lt;699.0,179.0&gt;--&lt;697.0,-215.0&gt;&gt;

* sinDVUu: L&lt;&lt;676.0,132.0&gt;--&lt;673.0,-255.0&gt;&gt;

* sinDdUu: L&lt;&lt;653.0,119.0&gt;--&lt;655.0,-238.0&gt;&gt;

* sinDdhUu: L&lt;&lt;653.0,144.0&gt;--&lt;655.0,-238.0&gt;&gt;

* sinDhUu: L&lt;&lt;603.0,93.0&gt;--&lt;605.0,-238.0&gt;&gt;

* sinFR.virama: L&lt;&lt;519.0,458.0&gt;--&lt;521.0,719.0&gt;&gt;

* sinFUu.alt: L&lt;&lt;631.0,154.0&gt;--&lt;633.0,-190.0&gt;&gt;

* sinFUu: L&lt;&lt;673.0,177.0&gt;--&lt;676.0,-248.0&gt;&gt;

* sinGhR.virama: L&lt;&lt;567.0,486.0&gt;--&lt;569.0,719.0&gt;&gt;

* sinGhUu: L&lt;&lt;673.0,110.0&gt;--&lt;675.0,-248.0&gt;&gt;

* sinJhUu: L&lt;&lt;1063.0,120.0&gt;--&lt;1065.0,-238.0&gt;&gt;

* sinKSsUu: L&lt;&lt;1100.0,144.0&gt;--&lt;1102.0,-238.0&gt;&gt;

* sinKVU: L&lt;&lt;1051.0,179.0&gt;--&lt;1049.0,-215.0&gt;&gt;

* sinKVUu: L&lt;&lt;1034.0,132.0&gt;--&lt;1031.0,-255.0&gt;&gt;

* sinKhUu: L&lt;&lt;640.0,225.0&gt;--&lt;642.0,-183.0&gt;&gt;

* sinMU: L&lt;&lt;633.0,223.0&gt;--&lt;631.0,-212.0&gt;&gt;

* sinMatraAa.virama: L&lt;&lt;131.0,435.0&gt;--&lt;132.0,719.0&gt;&gt;

* sinMatraUu.alt3: L&lt;&lt;19.0,218.0&gt;--&lt;22.0,-208.0&gt;&gt;

* sinMatraUu.alt: L&lt;&lt;23.0,195.0&gt;--&lt;25.0,-209.0&gt;&gt;

* sinMbUu: L&lt;&lt;663.0,118.0&gt;--&lt;665.0,-238.0&gt;&gt;

* sinNDU: L&lt;&lt;908.0,-240.0&gt;--&lt;650.0,-242.0&gt;&gt;

* sinNDhUu: L&lt;&lt;1032.0,106.0&gt;--&lt;1034.0,-228.0&gt;&gt;

* sinNUu: L&lt;&lt;783.0,131.0&gt;--&lt;786.0,-248.0&gt;&gt;

* sinNVU: L&lt;&lt;1027.0,179.0&gt;--&lt;1025.0,-215.0&gt;&gt;

* sinNVUu: L&lt;&lt;1006.0,132.0&gt;--&lt;1003.0,-255.0&gt;&gt;

* sinNdU: L&lt;&lt;547.0,-240.0&gt;--&lt;289.0,-242.0&gt;&gt;

* sinNnUu: L&lt;&lt;924.0,256.0&gt;--&lt;927.0,-188.0&gt;&gt;

* sinNnddUu: L&lt;&lt;784.0,119.0&gt;--&lt;786.0,-238.0&gt;&gt;

* sinNyU: L&lt;&lt;1035.0,-240.0&gt;--&lt;777.0,-242.0&gt;&gt;

* sinPUu: L&lt;&lt;593.0,144.0&gt;--&lt;595.0,-248.0&gt;&gt;

* sinPf.virama: L&lt;&lt;467.0,612.0&gt;--&lt;468.0,739.0&gt;&gt;

* sinPfR.virama: L&lt;&lt;468.0,612.0&gt;--&lt;469.0,739.0&gt;&gt;

* sinPfUu: L&lt;&lt;631.0,154.0&gt;--&lt;633.0,-190.0&gt;&gt;

* sinR.virama: L&lt;&lt;54.0,300.0&gt;--&lt;57.0,764.0&gt;&gt;

* sinSUu: L&lt;&lt;684.0,115.0&gt;--&lt;686.0,-238.0&gt;&gt;

* sinSsUu: L&lt;&lt;594.0,144.0&gt;--&lt;596.0,-238.0&gt;&gt;

* sinTThUu: L&lt;&lt;1016.0,172.0&gt;--&lt;1013.0,-211.0&gt;&gt;

* sinTVU: L&lt;&lt;1006.0,179.0&gt;--&lt;1004.0,-215.0&gt;&gt;

* sinTVUu: L&lt;&lt;1014.0,132.0&gt;--&lt;1011.0,-255.0&gt;&gt;

* sinTtTthUu: L&lt;&lt;754.0,157.0&gt;--&lt;751.0,-213.0&gt;&gt;

* sinVU: L&lt;&lt;565.0,179.0&gt;--&lt;563.0,-215.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;430.0,1.0&gt;--&lt;52.0,0.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;33.0,322.0&gt;--&lt;426.0,324.0&gt;&gt;

* uni01C4 (U+01C4): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* uni01C5 (U+01C5): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* uni0205 (U+0205): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni0207 (U+0207): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;55.0,223.0&gt;--&lt;360.0,224.0&gt;&gt;

* uni1E0C (U+1E0C): L&lt;&lt;263.0,1.0&gt;--&lt;25.0,0.0&gt;&gt;

* uni1EB9 (U+1EB9): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EBB (U+1EBB): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EBD (U+1EBD): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EBF (U+1EBF): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EC1 (U+1EC1): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EC3 (U+1EC3): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EC5 (U+1EC5): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;

* uni1EC7 (U+1EC7): L&lt;&lt;436.0,225.0&gt;--&lt;131.0,223.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/shaping.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
<p>Your font fully covers the following languages that require the soft-dotted feature: Ekpeye (Latn, 226,000 speakers), Igbo (Latn, 27,823,640 speakers), Dutch (Latn, 31,709,104 speakers), Lithuanian (Latn, 2,357,094 speakers), Ebira (Latn, 2,200,000 speakers).</p>
<p>Your font does <em>not</em> cover the following languages that require the soft-dotted feature: Bete-Bendi (Latn, 100,000 speakers), Aghem (Latn, 38,843 speakers), Zapotec (Latn, 490,000 speakers), Mango (Latn, 77,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Kom (Latn, 360,685 speakers), Dii (Latn, 71,000 speakers), Sar (Latn, 500,000 speakers), Lugbara (Latn, 2,200,000 speakers), Navajo (Latn, 166,319 speakers), Mundani (Latn, 34,000 speakers), Ma’di (Latn, 584,000 speakers), Koonzime (Latn, 40,000 speakers), Mfumte (Latn, 79,000 speakers), Cicipu (Latn, 44,000 speakers), Vute (Latn, 21,000 speakers), Avokaya (Latn, 100,000 speakers), Nzakara (Latn, 50,000 speakers), Makaa (Latn, 221,000 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Southern Kisi (Latn, 360,000 speakers), Gulay (Latn, 250,478 speakers), Dan (Latn, 1,099,244 speakers), Basaa (Latn, 332,940 speakers), South Central Banda (Latn, 244,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Ejagham (Latn, 120,000 speakers), Ngbaka (Latn, 1,020,000 speakers), Fur (Latn, 1,230,163 speakers), Yala (Latn, 200,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers), Bafut (Latn, 158,146 speakers).</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.subsets.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi</li>
<li>U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition</li>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, tifinagh, coptic</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, tai-le, old-permic, malayalam, canadian-aboriginal, syriac, coptic, math</li>
<li>U+030A COMBINING RING ABOVE: try adding syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac</li>
<li>U+0326 COMBINING COMMA BELOW: not included in any glyphset definition</li>
<li>U+0327 COMBINING CEDILLA: not included in any glyphset definition</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: tifinagh, gothic, caucasian-albanian, syriac, cherokee</li>
<li>U+2219 BULLET OPERATOR: try adding one of: symbols, math, yi, tai-tham</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>latin</code>, <code>latin-ext</code>, <code>sinhala</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Is there kerning info for non-ligated sequences? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.gpos.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>GPOS table lacks kerning info for the following non-ligated sequences:</p>
<pre><code>- f + f

- f + i

- f + l

- sinRU + comma

- sinRUu + comma

- sinRUu + period
</code></pre>
 [code: lacks-kern-info]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.gdef.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret position values for ligature glyphs on its GDEF table.</p>
 [code: lacks-caret-pos]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.meta.html#"></a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>
</div>
</details>




### Summary

| 💥 ERROR | ☠ FATAL | 🔥 FAIL | ⚠️ WARN | ⏩ SKIP | ℹ️ INFO | ✅ PASS | 🔎 DEBUG | 
| ---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 13 | 115 | 7 | 115 | 0 | 
| 0% | 0% | 0% | 5% | 46% | 3% | 46% | 0% | 



**Note:** The following loglevels were omitted in this report:


* SKIP
* INFO
* PASS
* DEBUG
