## FontSpector report

fontspector version: 1.9.0






## Check results




<details><summary>[16] fonts/ttf/ManameCANARY-Regular.ttf</summary>
<div>


<details>
    <summary>🔥 <b>FAIL</b> Directory name in GFonts repo structure must
    match NameID 1 of the regular. (googlefonts/repo/dirname_matches_nameid_1)</summary>
    <div>








- 🔥 **FAIL** Family name on the name table ('Maname CANARY') does not match directory name in the repo structure ('ttf'). Expected 'manamecanary'. [code: mismatch]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check that OS/2 fsSelection WWS bit is set correctly. (opentype/fsselection_wws)</summary>
    <div>








- ⚠️ **WARN** OS/2 fsSelection WWS bit is not set, and the font does not have name IDs 21/22 (WWS Family/Subfamily). If the font's naming is WWS-conformant, the WWS bit should be set. [code: no-wws-without-wws-names]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. (contour_count)</summary>
    <div>








- ⚠️ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are
     inferred from the typical amounts of contours observed in a
     large collection of reference font families. The divergences
     listed below may simply indicate a significantly different
     design on some of your glyphs. On the other hand, some of these
     may flag actual bugs in the font such as glyphs mapped to an
     incorrect codepoint. Please consider reviewing the design and
     codepoint assignment of these to make sure they are correct.


    The following glyphs do not have the recommended number of contours:
* ccedilla (U+00E7): found 3, expected one of: [1, 2, 6]
* six (U+0036): found 3, expected one of: [1, 2, 5]
* colonmonetary (U+20A1): found 2, expected one of: [1, 3, 5]
* uni0327 (U+0327): found 2, expected one of: [1]
* cedilla (U+00B8): found 2, expected one of: [1, 5] [code: contour-count]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. (math_signs_width)</summary>
    <div>








- ⚠️ **WARN** The most common width is 504 among a set of 13  math glyphs.
The following math glyphs have a different width, though:
width=529: logicalnot [code: width-outliers]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? (soft_hyphen)</summary>
    <div>








- ⚠️ **WARN** This font has a 'Soft Hyphen' character. [code: softhyphen]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs (unreachable_glyphs)</summary>
    <div>








- ⚠️ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

* rasignsinh
* ndRasinh
* ssRIsinh
* fRIsinh
* nDRIsinh
* ssRIisinh
* fRIisinh
* nDRIisinh
* nga_rephasinh
* nnga_rephasinh
* cha_rephasinh
* nyja_rephasinh
* ttha_rephasinh
* ddha_rephasinh
* nndda_rephasinh
* nda_rephasinh
* pha_rephasinh
* mba_rephasinh
* la_rephasinh
* lla_rephasinh
* fa_rephasinh
* k.001
* lithonesinh
* isignsinh.alt
* iisignsinh.alt
* uusignsinh.alt
* isignsinh.alt1
* iisignsinh.alt1
* usignsinh.alt1
* uusignsinh.alt1
* isignsinh.alt2
* iisignsinh.alt2
* uusignsinh.alt2
* isignsinh.alt3
* iisignsinh.alt3
* uusignsinh.alt3
* rasignsinh.long
* rasignsinh.medium
* rephasinh.2
* rasignsinh.short
* mooniak
* sinRU_period
* trtight [code: unreachable-glyphs]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Ensure font has overlaps bit set correctly. (overlaps_bit)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have overlaps but the overlaps bit is not set:
* uni1EDD (U+1EDD)
* Iogonek (U+012E)
* chIisinh
* uni01EA (U+01EA)
* chUusinh
* chsinh
* jhRsinh
* phUsinh
* ssRasinh
* sssinh
* nVUsinh
* tthsinh
* yasign_repha_aasignsinh
* Ccedilla (U+00C7)
* uni1EDE (U+1EDE)
* iogonek (U+012F)
* scedilla (U+015F)
* ba_rephasinh
* nya_rephasinh
* gha_rephasinh
* Oslashacute (U+01FE)
* ohungarumlaut (U+0151)
* bhsinh
* nysinh
* uhorn (U+01B0)
* mUusinh
* Uogonek (U+0172)
* jnysinh
* uni1EDB (U+1EDB)
* dda_rephasinh
* ccedilla (U+00E7)
* kSsUsinh
* bRsinh
* eogonek (U+0119)
* uni1EE2 (U+1EE2)
* uni1EE0 (U+1EE0)
* uni1EE1 (U+1EE1)
* nDhsinh
* uni0DA1 (U+0DA1)
* tsinh
* dRsinh
* ka_rephasinh
* kSssinh
* ssUusinh
* gsinh
* nDsinh
* shRsinh
* Ohorn (U+01A0)
* bsinh
* jhsinh
* dsinh
* dhRsinh
* pRsinh
* Eogonek (U+0118)
* ssa_rephasinh
* uni1EDF (U+1EDF)
* uni01EB (U+01EB)
* lsinh
* ma_rephasinh
* gRsinh
* oslashacute (U+01FF)
* ssIisinh
* uni0DDD (U+0DDD)
* dha_rephasinh
* dhsinh
* tta_rephasinh
* kSsIsinh
* shsinh
* Scedilla (U+015E)
* uni1EED (U+1EED)
* cUusinh
* aogonek (U+0105)
* ttha_rephasinh
* fa_rephasinh
* phsinh
* ttUusinh
* ssRIisinh
* uni1EDC (U+1EDC)
* thsinh
* nga_rephasinh
* ghsinh
* ga_rephasinh
* tthUusinh
* nnga_rephasinh
* jha_rephasinh
* jnya_rephasinh
* uni1EEF (U+1EEF)
* va_rephasinh
* fa_rephasinh.alt
* uni0DC2 (U+0DC2)
* vUusinh
* na_rephasinh
* chIsinh
* thUusinh
* hsinh
* ksinh
* jnyRsinh
* ohorn (U+01A1)
* nnsinh
* nsinh
* kha_rephasinh
* ssRIsinh
* cha_rephasinh
* kSsUusinh
* chUsinh
* uni1EE3 (U+1EE3)
* nndda_rephasinh
* la_rephasinh
* ta_rephasinh
* kSsasinh
* thUsinh
* Dcroat (U+0110)
* Oslash (U+00D8)
* ca_rephasinh
* llsinh
* tRsinh
* hRsinh
* kSsIisinh
* bha_rephasinh
* uni1EEB (U+1EEB)
* ttTthsinh
* phUusinh
* ssinh
* ssUsinh
* nna_rephasinh
* tthUsinh
* uni1EDA (U+1EDA)
* ssIsinh
* uni1EE9 (U+1EE9)
* fsinh
* mba_rephasinh
* nda_rephasinh
* nngsinh
* pha_rephasinh
* kSsa_rephasinh
* fIisinh
* yasign_rephasinh
* oslash (U+00F8)
* ssRsinh
* uni1EF1 (U+1EF1)
* da_rephasinh
* Eth (U+00D0)
* ddhsinh
* sha_rephasinh [code: no-overlaps-bit]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Shapes languages in all GF glyphsets. (googlefonts/glyphsets/shape_languages)</summary>
    <div>








- ⚠️ **WARN** Warning language shaping:

| Message                                                           | Languages                    |
|-------------------------------------------------------------------|------------------------------|
| Auxiliary orthography codepoints:                                 | * de_Latn (German)           |
|   The following auxiliary characters are missing from the font: ſ |                              |
| Auxiliary orthography codepoints:                                 | * lt_Latn (Lithuanian)       |
|   Shaper didn't attach tildecomb to l when shaping the text 'l̃'   |                              |
| Auxiliary orthography codepoints:                                 | * nl_Latn (Dutch)            |
|   The following auxiliary characters are missing from the font: Ĳ |                              |
|   The following auxiliary characters are missing from the font: ĳ |                              |
| Auxiliary orthography codepoints:                                 | * en_Latn (English)          |
|   The following auxiliary characters are missing from the font: ʻ |                              |
| Auxiliary orthography codepoints:                                 | * nb_Latn (Norwegian Bokmål) |
|   The following auxiliary characters are missing from the font: Ǎ |                              |
|   The following auxiliary characters are missing from the font: ǎ |                              |
| Auxiliary orthography codepoints:                                 | * fr_Latn (French)           |
|   The following auxiliary characters are missing from the font: Ǔ |                              |
|   The following auxiliary characters are missing from the font: ſ |                              |
|   The following auxiliary characters are missing from the font: ǔ |                              |
| Auxiliary orthography codepoints:                                 | * fi_Latn (Finnish)          |
|   The following auxiliary characters are missing from the font: Ǥ |                              |
|   The following auxiliary characters are missing from the font: Ȟ |                              |
|   The following auxiliary characters are missing from the font: Ǩ |                              |
|   The following auxiliary characters are missing from the font: Ʒ |                              |
|   The following auxiliary characters are missing from the font: Ǯ |                              |
|   The following auxiliary characters are missing from the font: ǥ |                              |
|   The following auxiliary characters are missing from the font: ȟ |                              |
|   The following auxiliary characters are missing from the font: ǩ |                              |
|   The following auxiliary characters are missing from the font: ʒ |                              |
|   The following auxiliary characters are missing from the font: ǯ |                              | [code: warning-language-shaping]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Font has correct separator glyphs? (googlefonts/separator_glyphs)</summary>
    <div>








- ⚠️ **WARN** Missing separator glyph U+2028 [code: missing-separator-glyphs]
  
  


- ⚠️ **WARN** Missing separator glyph U+2029 [code: missing-separator-glyphs]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that
replace the dot. (soft_dotted)</summary>
    <div>








- ⚠️ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings:

* į̂
* į̀
* į́
* į̃
* į̌
* į̄
* ị̂
* ị̀
* ị́
* ị̃
* ị̄The dot of soft dotted characters _should_ disappear in other cases, for example:

* į̉
* į̏
* į̊
* į̒
* į̇
* į̋
* į̆
* į̈
* į̑
* ị̉
* ị̏
* ị̊
* ị̒
* ị̇
* ị̋
* ị̆
* ị̌
* ị̈
* ị̑ [code: soft-dotted]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check the direction of the outermost contour in each glyph (outline_direction)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have a counter-clockwise outer contour:

* uni0D94 (U+0D94) has a path with no bounds (probably a single point)
* uni0D96 (U+0D96) has a path with no bounds (probably a single point)
* uni0D9E (U+0D9E) has a path with no bounds (probably a single point)
* uni0DA8 (U+0DA8) has a path with no bounds (probably a single point)
* ngsinh has a path with no bounds (probably a single point)
* tthsinh has a path with no bounds (probably a single point)
* ngIsinh has a path with no bounds (probably a single point)
* tthIsinh has a path with no bounds (probably a single point)
* ngIisinh has a path with no bounds (probably a single point)
* tthIisinh has a path with no bounds (probably a single point)
* ddIisinh has a path with no bounds (probably a single point)
* nnddIisinh has a path with no bounds (probably a single point)
* tthUsinh has a path with no bounds (probably a single point)
* tthUusinh has a path with no bounds (probably a single point)
* ddRIisinh has a path with no bounds (probably a single point)
* nga_rephasinh has a path with no bounds (probably a single point)
* ttha_rephasinh has a path with no bounds (probably a single point)
* six (U+0036) has a path with no bounds (probably a single point) [code: ccw-outer-contour]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? (outline_jaggy_segments)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have jaggy segments:

* uni0D89 (U+0D89): Quad(QuadBez { p0: (554.0, 27.5), p1: (484.0, -25.0), p2: (360.0, -57.0) })/Quad(QuadBez { p0: (360.0, -57.0), p1: (375.0, -54.0), p2: (391.0, -52.5) }) = 3.160361626045665 degrees
* uni0D8A (U+0D8A): Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* uni0D91 (U+0D91): Quad(QuadBez { p0: (146.0, 229.0), p1: (179.0, 265.0), p2: (229.0, 286.0) })/Quad(QuadBez { p0: (229.0, 286.0), p1: (160.0, 270.0), p2: (108.0, 247.0) }) = 9.727158506685102 degrees
* uni0D92 (U+0D92): Quad(QuadBez { p0: (125.0, 229.0), p1: (158.0, 265.0), p2: (209.0, 286.0) })/Quad(QuadBez { p0: (209.0, 286.0), p1: (139.0, 271.0), p2: (86.5, 247.5) }) = 10.28537797494743 degrees
* uni0D93 (U+0D93): Quad(QuadBez { p0: (659.0, 229.0), p1: (692.0, 265.0), p2: (742.0, 286.0) })/Quad(QuadBez { p0: (742.0, 286.0), p1: (673.0, 270.0), p2: (621.0, 247.0) }) = 9.727158506685102 degrees
* uni0D9A (U+0D9A): Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* uni0DA0 (U+0DA0): Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* uni0DA1 (U+0DA1): Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) })/Quad(QuadBez { p0: (265.0, 326.0), p1: (266.0, 327.0), p2: (266.0, 327.0) }) = 0.0000012074182697257333 degrees
* uni0DA3 (U+0DA3): Quad(QuadBez { p0: (310.0, 334.0), p1: (268.0, 303.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (277.0, 305.0), p2: (310.5, 323.0) }) = 8.229229901467633 degrees
* uni0DA4 (U+0DA4): Quad(QuadBez { p0: (431.0, 316.5), p1: (414.0, 303.0), p2: (404.0, 294.0) })/Quad(QuadBez { p0: (404.0, 294.0), p1: (431.0, 313.0), p2: (464.5, 331.5) }) = 6.853019438901028 degrees
* uni0DA9 (U+0DA9): Quad(QuadBez { p0: (130.0, 254.5), p1: (159.0, 295.0), p2: (206.0, 317.0) })/Quad(QuadBez { p0: (206.0, 317.0), p1: (148.0, 301.0), p2: (111.5, 281.0) }) = 9.66143268745223 degrees
* uni0DA9 (U+0DA9): Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) })/Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) }) = 0.0000012074182697257333 degrees
* uni0DAA (U+0DAA): Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* uni0DAC (U+0DAC): Quad(QuadBez { p0: (262.0, 254.5), p1: (291.0, 295.0), p2: (338.0, 317.0) })/Quad(QuadBez { p0: (338.0, 317.0), p1: (280.0, 301.0), p2: (243.5, 281.0) }) = 9.66143268745223 degrees
* uni0DAC (U+0DAC): Quad(QuadBez { p0: (542.0, 106.0), p1: (541.0, 105.0), p2: (542.0, 106.0) })/Quad(QuadBez { p0: (542.0, 106.0), p1: (541.0, 105.0), p2: (542.0, 106.0) }) = 0.0000012074182697257333 degrees
* uni0DAD (U+0DAD): Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* uni0DB1 (U+0DB1): Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* uni0DB7 (U+0DB7): Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* uni0DBB (U+0DBB): Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* uni0DC2 (U+0DC2): Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* uni0DC3 (U+0DC3): Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSsasinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSsasinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVasinh: Quad(QuadBez { p0: (292.0, 312.5), p1: (273.0, 298.0), p2: (261.0, 286.0) })/Quad(QuadBez { p0: (261.0, 286.0), p1: (301.0, 315.0), p2: (355.5, 339.5) }) = 9.05788812861762 degrees
* tVasinh: Quad(QuadBez { p0: (303.0, 408.0), p1: (293.0, 384.0), p2: (280.0, 363.0) })/Quad(QuadBez { p0: (280.0, 363.0), p1: (282.0, 365.0), p2: (284.0, 367.0) }) = 13.24051991518724 degrees
* tVasinh: Quad(QuadBez { p0: (268.5, 302.5), p1: (252.0, 288.0), p2: (244.0, 280.0) })/Quad(QuadBez { p0: (244.0, 280.0), p1: (261.0, 294.0), p2: (277.5, 302.5) }) = 5.527540151656126 degrees
* tThasinh: Quad(QuadBez { p0: (281.5, 302.5), p1: (265.0, 288.0), p2: (257.0, 280.0) })/Quad(QuadBez { p0: (257.0, 280.0), p1: (274.0, 294.0), p2: (290.5, 302.5) }) = 5.527540151656126 degrees
* nDasinh: Quad(QuadBez { p0: (315.0, 307.0), p1: (306.0, 298.0), p2: (296.0, 288.0) })/Quad(QuadBez { p0: (296.0, 288.0), p1: (335.0, 316.0), p2: (375.0, 336.0) }) = 9.323591778138038 degrees
* nDhasinh: Quad(QuadBez { p0: (277.0, 289.0), p1: (266.0, 277.0), p2: (255.0, 264.0) })/Quad(QuadBez { p0: (255.0, 264.0), p1: (298.0, 296.0), p2: (343.0, 320.0) }) = 13.10753327475928 degrees
* nThasinh: Quad(QuadBez { p0: (339.0, 307.0), p1: (337.0, 306.0), p2: (335.0, 304.0) })/Quad(QuadBez { p0: (335.0, 304.0), p1: (365.0, 322.0), p2: (394.0, 333.0) }) = 14.03624346792651 degrees
* ksinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* khsinh: Quad(QuadBez { p0: (192.5, 711.0), p1: (203.0, 734.0), p2: (211.0, 750.0) })/Line(Line { p0: (211.0, 750.0), p1: (206.0, 742.0) }) = 5.440332031005414 degrees
* csinh: Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* chsinh: Line(Line { p0: (255.0, 327.0), p1: (254.0, 326.0) })/Quad(QuadBez { p0: (254.0, 326.0), p1: (255.0, 327.0), p2: (255.0, 327.0) }) = 0.0000012074182697257333 degrees
* jhsinh: Quad(QuadBez { p0: (836.0, 726.0), p1: (833.0, 725.0), p2: (829.0, 724.0) })/Line(Line { p0: (829.0, 724.0), p1: (836.0, 726.0) }) = 1.9091524329963898 degrees
* jhsinh: Line(Line { p0: (829.0, 724.0), p1: (836.0, 726.0) })/Quad(QuadBez { p0: (836.0, 726.0), p1: (833.0, 725.0), p2: (829.0, 724.0) }) = 2.4895529219992745 degrees
* jhsinh: Line(Line { p0: (755.0, 706.0), p1: (781.0, 713.0) })/Quad(QuadBez { p0: (781.0, 713.0), p1: (766.0, 710.0), p2: (760.5, 708.0) }) = 3.758555685472039 degrees
* jhsinh: Quad(QuadBez { p0: (294.0, 312.5), p1: (275.0, 298.0), p2: (262.0, 286.0) })/Quad(QuadBez { p0: (262.0, 286.0), p1: (302.0, 315.0), p2: (357.0, 339.5) }) = 6.7672780859790445 degrees
* nysinh: Quad(QuadBez { p0: (431.0, 316.5), p1: (414.0, 303.0), p2: (404.0, 294.0) })/Quad(QuadBez { p0: (404.0, 294.0), p1: (431.0, 313.0), p2: (464.5, 331.5) }) = 6.853019438901028 degrees
* ddsinh: Quad(QuadBez { p0: (130.0, 254.5), p1: (159.0, 295.0), p2: (206.0, 317.0) })/Quad(QuadBez { p0: (206.0, 317.0), p1: (148.0, 301.0), p2: (111.5, 281.0) }) = 9.66143268745223 degrees
* ddsinh: Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) })/Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) }) = 0.0000012074182697257333 degrees
* ddhsinh: Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* nnddsinh: Quad(QuadBez { p0: (273.0, 254.5), p1: (302.0, 295.0), p2: (349.0, 317.0) })/Quad(QuadBez { p0: (349.0, 317.0), p1: (291.0, 301.0), p2: (254.5, 281.0) }) = 9.66143268745223 degrees
* nnddsinh: Quad(QuadBez { p0: (553.0, 106.0), p1: (552.0, 105.0), p2: (553.0, 106.0) })/Quad(QuadBez { p0: (553.0, 106.0), p1: (552.0, 105.0), p2: (553.0, 106.0) }) = 0.0000012074182697257333 degrees
* tsinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* dhsinh: Quad(QuadBez { p0: (316.0, 726.0), p1: (313.0, 725.0), p2: (309.0, 724.0) })/Line(Line { p0: (309.0, 724.0), p1: (316.0, 726.0) }) = 1.9091524329963898 degrees
* dhsinh: Line(Line { p0: (309.0, 724.0), p1: (316.0, 726.0) })/Quad(QuadBez { p0: (316.0, 726.0), p1: (313.0, 725.0), p2: (309.0, 724.0) }) = 2.4895529219992745 degrees
* dhsinh: Line(Line { p0: (235.0, 706.0), p1: (261.0, 713.0) })/Quad(QuadBez { p0: (261.0, 713.0), p1: (246.0, 710.0), p2: (240.5, 708.0) }) = 3.758555685472039 degrees
* nsinh: Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* bsinh: Quad(QuadBez { p0: (323.0, 779.0), p1: (319.0, 778.0), p2: (314.0, 777.0) })/Line(Line { p0: (314.0, 777.0), p1: (323.0, 779.0) }) = 1.2188752351310335 degrees
* bsinh: Line(Line { p0: (314.0, 777.0), p1: (323.0, 779.0) })/Quad(QuadBez { p0: (323.0, 779.0), p1: (319.0, 778.0), p2: (314.0, 777.0) }) = 1.5074357587748821 degrees
* bsinh: Line(Line { p0: (242.0, 759.0), p1: (282.0, 769.0) })/Quad(QuadBez { p0: (282.0, 769.0), p1: (258.0, 766.0), p2: (250.0, 762.5) }) = 6.911227119024715 degrees
* bhsinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* msinh: Quad(QuadBez { p0: (318.0, 773.0), p1: (315.0, 773.0), p2: (312.0, 772.0) })/Line(Line { p0: (312.0, 772.0), p1: (318.0, 773.0) }) = 8.972626614896358 degrees
* msinh: Line(Line { p0: (312.0, 772.0), p1: (318.0, 773.0) })/Quad(QuadBez { p0: (318.0, 773.0), p1: (315.0, 773.0), p2: (312.0, 772.0) }) = 9.462322208025613 degrees
* msinh: Line(Line { p0: (238.0, 754.0), p1: (268.0, 761.0) })/Quad(QuadBez { p0: (268.0, 761.0), p1: (250.0, 759.0), p2: (244.0, 756.5) }) = 6.793830560486495 degrees
* mbsinh: Line(Line { p0: (238.0, 752.0), p1: (251.0, 755.0) })/Quad(QuadBez { p0: (251.0, 755.0), p1: (245.0, 754.0), p2: (241.5, 753.0) }) = 3.532294583890938 degrees
* rsinh: Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* vsinh: Line(Line { p0: (295.0, 783.0), p1: (300.0, 784.0) })/Quad(QuadBez { p0: (300.0, 784.0), p1: (297.0, 784.0), p2: (295.0, 783.0) }) = 11.309932474020195 degrees
* vsinh: Line(Line { p0: (219.0, 765.0), p1: (249.0, 772.0) })/Quad(QuadBez { p0: (249.0, 772.0), p1: (232.0, 770.0), p2: (225.5, 767.5) }) = 6.424185498639428 degrees
* sssinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* ssinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSssinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSssinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVsinh: Line(Line { p0: (801.0, 783.0), p1: (806.0, 784.0) })/Quad(QuadBez { p0: (806.0, 784.0), p1: (803.0, 784.0), p2: (801.0, 783.0) }) = 11.309932474020195 degrees
* kVsinh: Line(Line { p0: (725.0, 765.0), p1: (755.0, 772.0) })/Quad(QuadBez { p0: (755.0, 772.0), p1: (738.0, 770.0), p2: (731.5, 767.5) }) = 6.424185498639428 degrees
* kVsinh: Quad(QuadBez { p0: (292.0, 312.5), p1: (273.0, 298.0), p2: (261.0, 286.0) })/Quad(QuadBez { p0: (261.0, 286.0), p1: (301.0, 315.0), p2: (355.5, 339.5) }) = 9.05788812861762 degrees
* tVsinh: Quad(QuadBez { p0: (353.5, 401.0), p1: (343.0, 376.0), p2: (329.0, 354.0) })/Quad(QuadBez { p0: (329.0, 354.0), p1: (332.0, 358.0), p2: (336.0, 361.0) }) = 4.398705354995674 degrees
* tVsinh: Line(Line { p0: (824.0, 783.0), p1: (829.0, 784.0) })/Quad(QuadBez { p0: (829.0, 784.0), p1: (826.0, 784.0), p2: (824.0, 783.0) }) = 11.309932474020195 degrees
* tVsinh: Line(Line { p0: (748.0, 765.0), p1: (778.0, 772.0) })/Quad(QuadBez { p0: (778.0, 772.0), p1: (761.0, 770.0), p2: (754.5, 767.5) }) = 6.424185498639428 degrees
* tVsinh: Quad(QuadBez { p0: (319.5, 295.5), p1: (303.0, 281.0), p2: (295.0, 272.0) })/Quad(QuadBez { p0: (295.0, 272.0), p1: (312.0, 287.0), p2: (328.5, 296.5) }) = 6.942795038427126 degrees
* tThsinh: Quad(QuadBez { p0: (281.5, 302.5), p1: (265.0, 288.0), p2: (257.0, 280.0) })/Quad(QuadBez { p0: (257.0, 280.0), p1: (274.0, 294.0), p2: (290.5, 302.5) }) = 5.527540151656126 degrees
* nDsinh: Quad(QuadBez { p0: (315.0, 307.0), p1: (306.0, 298.0), p2: (296.0, 288.0) })/Quad(QuadBez { p0: (296.0, 288.0), p1: (335.0, 316.0), p2: (375.0, 336.0) }) = 9.323591778138038 degrees
* nDhsinh: Quad(QuadBez { p0: (788.0, 726.0), p1: (785.0, 725.0), p2: (781.0, 724.0) })/Line(Line { p0: (781.0, 724.0), p1: (788.0, 726.0) }) = 1.9091524329963898 degrees
* nDhsinh: Line(Line { p0: (781.0, 724.0), p1: (788.0, 726.0) })/Quad(QuadBez { p0: (788.0, 726.0), p1: (785.0, 725.0), p2: (781.0, 724.0) }) = 2.4895529219992745 degrees
* nDhsinh: Line(Line { p0: (707.0, 706.0), p1: (733.0, 713.0) })/Quad(QuadBez { p0: (733.0, 713.0), p1: (718.0, 710.0), p2: (712.5, 708.0) }) = 3.758555685472039 degrees
* nDhsinh: Quad(QuadBez { p0: (300.0, 289.0), p1: (289.0, 277.0), p2: (278.0, 264.0) })/Quad(QuadBez { p0: (278.0, 264.0), p1: (321.0, 296.0), p2: (366.0, 320.0) }) = 13.10753327475928 degrees
* nVsinh: Line(Line { p0: (771.0, 783.0), p1: (776.0, 784.0) })/Quad(QuadBez { p0: (776.0, 784.0), p1: (773.0, 784.0), p2: (771.0, 783.0) }) = 11.309932474020195 degrees
* nVsinh: Line(Line { p0: (695.0, 765.0), p1: (725.0, 772.0) })/Quad(QuadBez { p0: (725.0, 772.0), p1: (708.0, 770.0), p2: (701.5, 767.5) }) = 6.424185498639428 degrees
* nThsinh: Quad(QuadBez { p0: (314.0, 307.0), p1: (312.0, 306.0), p2: (310.0, 304.0) })/Quad(QuadBez { p0: (310.0, 304.0), p1: (340.0, 322.0), p2: (369.0, 333.0) }) = 14.03624346792651 degrees
* dVsinh: Line(Line { p0: (441.0, 783.0), p1: (446.0, 784.0) })/Quad(QuadBez { p0: (446.0, 784.0), p1: (443.0, 784.0), p2: (441.0, 783.0) }) = 11.309932474020195 degrees
* dVsinh: Line(Line { p0: (365.0, 765.0), p1: (395.0, 772.0) })/Quad(QuadBez { p0: (395.0, 772.0), p1: (378.0, 770.0), p2: (371.5, 767.5) }) = 6.424185498639428 degrees
* kIsinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* cIsinh: Quad(QuadBez { p0: (127.0, 239.5), p1: (153.0, 270.0), p2: (189.0, 289.0) })/Quad(QuadBez { p0: (189.0, 289.0), p1: (136.0, 274.0), p2: (96.5, 257.0) }) = 12.021582430317743 degrees
* chIsinh: Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) })/Quad(QuadBez { p0: (265.0, 326.0), p1: (266.0, 327.0), p2: (266.0, 327.0) }) = 0.0000012074182697257333 degrees
* jhIsinh: Quad(QuadBez { p0: (85.5, 182.0), p1: (143.0, 239.0), p2: (250.0, 331.0) })/Line(Line { p0: (250.0, 331.0), p1: (248.0, 330.0) }) = 14.124322998101512 degrees
* jhIsinh: Quad(QuadBez { p0: (282.0, 312.5), p1: (263.0, 298.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (290.0, 315.0), p2: (345.0, 339.5) }) = 6.7672780859790445 degrees
* nyIsinh: Quad(QuadBez { p0: (431.0, 316.5), p1: (414.0, 303.0), p2: (404.0, 294.0) })/Quad(QuadBez { p0: (404.0, 294.0), p1: (431.0, 313.0), p2: (464.5, 331.5) }) = 6.853019438901028 degrees
* ddIsinh: Quad(QuadBez { p0: (170.0, 247.0), p1: (200.0, 266.0), p2: (235.0, 278.0) })/Quad(QuadBez { p0: (235.0, 278.0), p1: (167.0, 262.0), p2: (117.0, 239.5) }) = 5.684124500863936 degrees
* ddIsinh: Quad(QuadBez { p0: (411.0, 106.0), p1: (410.0, 105.0), p2: (411.0, 106.0) })/Quad(QuadBez { p0: (411.0, 106.0), p1: (410.0, 105.0), p2: (411.0, 106.0) }) = 0.0000012074182697257333 degrees
* ddhIsinh: Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* nnddIsinh: Quad(QuadBez { p0: (306.0, 247.0), p1: (336.0, 266.0), p2: (371.0, 278.0) })/Quad(QuadBez { p0: (371.0, 278.0), p1: (303.0, 262.0), p2: (253.0, 239.5) }) = 5.684124500863936 degrees
* nnddIsinh: Quad(QuadBez { p0: (547.0, 106.0), p1: (546.0, 105.0), p2: (547.0, 106.0) })/Quad(QuadBez { p0: (547.0, 106.0), p1: (546.0, 105.0), p2: (547.0, 106.0) }) = 0.0000012074182697257333 degrees
* tIsinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* nIsinh: Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* bhIsinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* rIsinh: Quad(QuadBez { p0: (256.0, 466.5), p1: (214.0, 439.0), p2: (186.0, 413.0) })/Quad(QuadBez { p0: (186.0, 413.0), p1: (216.0, 439.0), p2: (265.0, 463.5) }) = 1.964520383313339 degrees
* ssIsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sIsinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSsIsinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSsIsinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVIsinh: Quad(QuadBez { p0: (321.5, 288.0), p1: (301.0, 272.0), p2: (289.0, 260.0) })/Quad(QuadBez { p0: (289.0, 260.0), p1: (316.0, 280.0), p2: (350.0, 298.5) }) = 8.47114463301479 degrees
* tVIsinh: Quad(QuadBez { p0: (303.0, 408.0), p1: (293.0, 384.0), p2: (280.0, 363.0) })/Quad(QuadBez { p0: (280.0, 363.0), p1: (282.0, 365.0), p2: (284.0, 367.0) }) = 13.24051991518724 degrees
* tVIsinh: Quad(QuadBez { p0: (268.5, 303.0), p1: (252.0, 288.0), p2: (244.0, 280.0) })/Quad(QuadBez { p0: (244.0, 280.0), p1: (261.0, 294.0), p2: (277.5, 302.5) }) = 5.527540151656126 degrees
* tThIsinh: Quad(QuadBez { p0: (281.5, 302.5), p1: (265.0, 288.0), p2: (257.0, 280.0) })/Quad(QuadBez { p0: (257.0, 280.0), p1: (274.0, 294.0), p2: (290.5, 302.5) }) = 5.527540151656126 degrees
* nDIsinh: Quad(QuadBez { p0: (315.0, 307.0), p1: (306.0, 298.0), p2: (296.0, 288.0) })/Quad(QuadBez { p0: (296.0, 288.0), p1: (335.0, 316.0), p2: (375.0, 336.0) }) = 9.323591778138038 degrees
* nDhIsinh: Quad(QuadBez { p0: (310.0, 288.5), p1: (299.0, 276.0), p2: (287.0, 263.0) })/Quad(QuadBez { p0: (287.0, 263.0), p1: (330.0, 296.0), p2: (375.5, 320.0) }) = 9.786467682368322 degrees
* nThIsinh: Quad(QuadBez { p0: (339.0, 307.0), p1: (337.0, 306.0), p2: (335.0, 304.0) })/Quad(QuadBez { p0: (335.0, 304.0), p1: (365.0, 322.0), p2: (394.0, 333.0) }) = 14.03624346792651 degrees
* kIisinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* cIisinh: Quad(QuadBez { p0: (159.0, 234.5), p1: (189.0, 269.0), p2: (229.0, 289.0) })/Quad(QuadBez { p0: (229.0, 289.0), p1: (171.0, 274.0), p2: (128.0, 256.0) }) = 12.064884410525451 degrees
* chIisinh: Line(Line { p0: (244.0, 327.0), p1: (243.0, 326.0) })/Quad(QuadBez { p0: (243.0, 326.0), p1: (244.0, 327.0), p2: (244.0, 327.0) }) = 0.0000012074182697257333 degrees
* jhIisinh: Quad(QuadBez { p0: (85.5, 182.0), p1: (143.0, 239.0), p2: (250.0, 331.0) })/Line(Line { p0: (250.0, 331.0), p1: (248.0, 330.0) }) = 14.124322998101512 degrees
* jhIisinh: Quad(QuadBez { p0: (282.0, 312.5), p1: (263.0, 298.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (290.0, 315.0), p2: (345.0, 339.5) }) = 6.7672780859790445 degrees
* nyIisinh: Quad(QuadBez { p0: (431.0, 316.5), p1: (414.0, 303.0), p2: (404.0, 294.0) })/Quad(QuadBez { p0: (404.0, 294.0), p1: (431.0, 313.0), p2: (464.5, 331.5) }) = 6.853019438901028 degrees
* ddIisinh: Quad(QuadBez { p0: (238.0, 262.5), p1: (271.0, 275.0), p2: (303.0, 283.0) })/Quad(QuadBez { p0: (303.0, 283.0), p1: (247.0, 274.0), p2: (200.0, 258.5) }) = 4.906066985647847 degrees
* ddhIisinh: Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* nnddIisinh: Quad(QuadBez { p0: (373.0, 262.5), p1: (406.0, 275.0), p2: (438.0, 283.0) })/Quad(QuadBez { p0: (438.0, 283.0), p1: (382.0, 274.0), p2: (335.0, 258.5) }) = 4.906066985647847 degrees
* tIisinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* nIisinh: Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* bIisinh: Line(Line { p0: (542.0, 673.0), p1: (558.0, 665.0) })/Quad(QuadBez { p0: (558.0, 665.0), p1: (550.0, 669.0), p2: (542.0, 673.0) }) = 0.0000012074182697257333 degrees
* bIisinh: Quad(QuadBez { p0: (558.0, 665.0), p1: (550.0, 669.0), p2: (542.0, 673.0) })/Line(Line { p0: (542.0, 673.0), p1: (558.0, 665.0) }) = 0.0000012074182697257333 degrees
* bhIisinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* rIisinh: Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* ssIisinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sIisinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSsIisinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSsIisinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVIisinh: Quad(QuadBez { p0: (321.5, 288.0), p1: (301.0, 272.0), p2: (289.0, 260.0) })/Quad(QuadBez { p0: (289.0, 260.0), p1: (316.0, 280.0), p2: (350.0, 298.5) }) = 8.47114463301479 degrees
* tVIisinh: Quad(QuadBez { p0: (87.0, 64.0), p1: (85.0, 60.0), p2: (84.0, 56.0) })/Quad(QuadBez { p0: (84.0, 56.0), p1: (84.0, 57.0), p2: (75.5, 62.0) }) = 14.036243467926484 degrees
* tVIisinh: Quad(QuadBez { p0: (309.5, 406.5), p1: (299.0, 382.0), p2: (286.0, 361.0) })/Quad(QuadBez { p0: (286.0, 361.0), p1: (289.0, 364.0), p2: (292.0, 367.0) }) = 13.240519915187184 degrees
* tVIisinh: Quad(QuadBez { p0: (276.5, 303.0), p1: (260.0, 288.0), p2: (252.0, 280.0) })/Quad(QuadBez { p0: (252.0, 280.0), p1: (269.0, 294.0), p2: (285.0, 303.5) }) = 5.527540151656126 degrees
* tThIisinh: Quad(QuadBez { p0: (281.5, 302.5), p1: (265.0, 288.0), p2: (257.0, 280.0) })/Quad(QuadBez { p0: (257.0, 280.0), p1: (274.0, 294.0), p2: (290.5, 302.5) }) = 5.527540151656126 degrees
* nDIisinh: Quad(QuadBez { p0: (315.0, 307.0), p1: (306.0, 298.0), p2: (296.0, 288.0) })/Quad(QuadBez { p0: (296.0, 288.0), p1: (335.0, 316.0), p2: (375.0, 336.0) }) = 9.323591778138038 degrees
* nDhIisinh: Quad(QuadBez { p0: (310.0, 288.5), p1: (299.0, 276.0), p2: (287.0, 263.0) })/Quad(QuadBez { p0: (287.0, 263.0), p1: (330.0, 296.0), p2: (375.5, 320.0) }) = 9.786467682368322 degrees
* nVIisinh: Quad(QuadBez { p0: (310.5, 272.0), p1: (300.0, 260.0), p2: (289.0, 247.0) })/Quad(QuadBez { p0: (289.0, 247.0), p1: (332.0, 280.0), p2: (376.5, 303.5) }) = 12.259499330456032 degrees
* nThIisinh: Quad(QuadBez { p0: (339.0, 307.0), p1: (337.0, 306.0), p2: (335.0, 304.0) })/Quad(QuadBez { p0: (335.0, 304.0), p1: (365.0, 322.0), p2: (394.0, 333.0) }) = 14.03624346792651 degrees
* kUsinh: Quad(QuadBez { p0: (144.0, 236.5), p1: (196.0, 285.0), p2: (260.0, 339.0) })/Line(Line { p0: (260.0, 339.0), p1: (258.0, 338.0) }) = 13.590948447841322 degrees
* kUsinh: Quad(QuadBez { p0: (284.0, 313.5), p1: (267.0, 300.0), p2: (257.0, 291.0) })/Quad(QuadBez { p0: (257.0, 291.0), p1: (284.0, 310.0), p2: (317.5, 328.5) }) = 6.853019438901028 degrees
* cUsinh: Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* chUsinh: Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) })/Quad(QuadBez { p0: (265.0, 326.0), p1: (266.0, 327.0), p2: (266.0, 327.0) }) = 0.0000012074182697257333 degrees
* jhUsinh: Quad(QuadBez { p0: (310.0, 334.0), p1: (268.0, 303.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (277.0, 305.0), p2: (310.5, 323.0) }) = 8.229229901467633 degrees
* nyUsinh: Quad(QuadBez { p0: (431.0, 316.5), p1: (414.0, 303.0), p2: (404.0, 294.0) })/Quad(QuadBez { p0: (404.0, 294.0), p1: (431.0, 314.0), p2: (464.5, 332.0) }) = 5.45835712883143 degrees
* ddUsinh: Quad(QuadBez { p0: (107.0, 254.5), p1: (136.0, 295.0), p2: (183.0, 317.0) })/Quad(QuadBez { p0: (183.0, 317.0), p1: (125.0, 301.0), p2: (88.5, 281.0) }) = 9.66143268745223 degrees
* ddUsinh: Quad(QuadBez { p0: (387.0, 106.0), p1: (386.0, 105.0), p2: (387.0, 106.0) })/Quad(QuadBez { p0: (387.0, 106.0), p1: (386.0, 105.0), p2: (387.0, 106.0) }) = 0.0000012074182697257333 degrees
* ddhUsinh: Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* nnddUsinh: Quad(QuadBez { p0: (266.0, 254.5), p1: (295.0, 295.0), p2: (342.0, 317.0) })/Quad(QuadBez { p0: (342.0, 317.0), p1: (284.0, 301.0), p2: (247.5, 281.0) }) = 9.66143268745223 degrees
* nnddUsinh: Quad(QuadBez { p0: (546.0, 106.0), p1: (545.0, 105.0), p2: (546.0, 106.0) })/Quad(QuadBez { p0: (546.0, 106.0), p1: (545.0, 105.0), p2: (546.0, 106.0) }) = 0.0000012074182697257333 degrees
* tUsinh: Quad(QuadBez { p0: (289.0, 416.0), p1: (279.0, 392.0), p2: (266.0, 371.0) })/Quad(QuadBez { p0: (266.0, 371.0), p1: (268.0, 373.0), p2: (270.0, 375.0) }) = 13.24051991518724 degrees
* tUsinh: Quad(QuadBez { p0: (281.0, 332.0), p1: (247.0, 305.0), p2: (230.0, 287.0) })/Quad(QuadBez { p0: (230.0, 287.0), p1: (239.0, 294.0), p2: (243.0, 297.5) }) = 8.76159339051855 degrees
* nUsinh: Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* rUsinh: Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* ssUsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sUsinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSsUsinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSsUsinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVUsinh: Quad(QuadBez { p0: (324.0, 310.5), p1: (305.0, 296.0), p2: (292.0, 284.0) })/Quad(QuadBez { p0: (292.0, 284.0), p1: (333.0, 313.0), p2: (387.5, 337.5) }) = 7.436968508763051 degrees
* tVUsinh: Quad(QuadBez { p0: (87.0, 73.0), p1: (85.0, 69.0), p2: (84.0, 65.0) })/Quad(QuadBez { p0: (84.0, 65.0), p1: (84.0, 66.0), p2: (75.5, 71.0) }) = 14.036243467926484 degrees
* tVUsinh: Quad(QuadBez { p0: (309.5, 416.0), p1: (299.0, 391.0), p2: (286.0, 370.0) })/Quad(QuadBez { p0: (286.0, 370.0), p1: (289.0, 373.0), p2: (292.0, 376.0) }) = 13.240519915187184 degrees
* tVUsinh: Quad(QuadBez { p0: (276.5, 312.0), p1: (260.0, 297.0), p2: (252.0, 288.0) })/Quad(QuadBez { p0: (252.0, 288.0), p1: (269.0, 302.0), p2: (285.0, 311.5) }) = 8.894000815085953 degrees
* tThUsinh: Quad(QuadBez { p0: (315.0, 414.5), p1: (304.0, 390.0), p2: (291.0, 368.0) })/Quad(QuadBez { p0: (291.0, 368.0), p1: (294.0, 372.0), p2: (298.0, 375.0) }) = 6.290670773355015 degrees
* tThUsinh: Quad(QuadBez { p0: (281.5, 311.5), p1: (265.0, 296.0), p2: (257.0, 288.0) })/Quad(QuadBez { p0: (257.0, 288.0), p1: (274.0, 302.0), p2: (290.5, 311.5) }) = 5.527540151656126 degrees
* nDUsinh: Quad(QuadBez { p0: (310.5, 283.0), p1: (300.0, 271.0), p2: (289.0, 258.0) })/Quad(QuadBez { p0: (289.0, 258.0), p1: (332.0, 290.0), p2: (376.5, 314.0) }) = 13.10753327475928 degrees
* nDhUsinh: Quad(QuadBez { p0: (282.0, 289.0), p1: (271.0, 277.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (348.0, 320.0) }) = 13.10753327475928 degrees
* nVUsinh: Line(Line { p0: (552.0, 160.0), p1: (552.0, 166.0) })/Quad(QuadBez { p0: (552.0, 166.0), p1: (533.0, 82.0), p2: (464.0, 34.5) }) = 12.74528947313286 degrees
* nVUsinh: Quad(QuadBez { p0: (299.5, 291.5), p1: (289.0, 279.0), p2: (278.0, 266.0) })/Quad(QuadBez { p0: (278.0, 266.0), p1: (321.0, 300.0), p2: (365.5, 324.0) }) = 11.430301581627583 degrees
* nThUsinh: Quad(QuadBez { p0: (340.0, 317.0), p1: (338.0, 315.0), p2: (334.0, 311.0) })/Quad(QuadBez { p0: (334.0, 311.0), p1: (364.0, 330.0), p2: (393.5, 342.0) }) = 12.652556500557967 degrees
* kUusinh: Quad(QuadBez { p0: (286.0, 316.5), p1: (270.0, 303.0), p2: (259.0, 294.0) })/Quad(QuadBez { p0: (259.0, 294.0), p1: (286.0, 313.0), p2: (319.5, 331.0) }) = 4.155213805584672 degrees
* cUusinh: Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* chUusinh: Line(Line { p0: (277.0, 327.0), p1: (276.0, 326.0) })/Quad(QuadBez { p0: (276.0, 326.0), p1: (277.0, 327.0), p2: (277.0, 327.0) }) = 0.0000012074182697257333 degrees
* jhUusinh: Quad(QuadBez { p0: (310.0, 334.0), p1: (268.0, 303.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (277.0, 305.0), p2: (310.5, 323.0) }) = 8.229229901467633 degrees
* nyUusinh: Quad(QuadBez { p0: (291.5, 242.5), p1: (343.0, 288.0), p2: (406.0, 341.0) })/Line(Line { p0: (406.0, 341.0), p1: (404.0, 340.0) }) = 13.507838875273043 degrees
* nyUusinh: Quad(QuadBez { p0: (436.5, 319.5), p1: (422.0, 308.0), p2: (411.0, 299.0) })/Quad(QuadBez { p0: (411.0, 299.0), p1: (451.0, 327.0), p2: (503.5, 350.5) }) = 4.297386663941611 degrees
* ddUusinh: Quad(QuadBez { p0: (130.0, 254.5), p1: (159.0, 295.0), p2: (206.0, 317.0) })/Quad(QuadBez { p0: (206.0, 317.0), p1: (148.0, 301.0), p2: (111.5, 281.0) }) = 9.66143268745223 degrees
* ddUusinh: Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) })/Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) }) = 0.0000012074182697257333 degrees
* ddhUusinh: Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* nnddUusinh: Quad(QuadBez { p0: (273.0, 254.5), p1: (302.0, 295.0), p2: (349.0, 317.0) })/Quad(QuadBez { p0: (349.0, 317.0), p1: (291.0, 301.0), p2: (254.5, 281.0) }) = 9.66143268745223 degrees
* nnddUusinh: Quad(QuadBez { p0: (553.0, 106.0), p1: (552.0, 105.0), p2: (553.0, 106.0) })/Quad(QuadBez { p0: (553.0, 106.0), p1: (552.0, 105.0), p2: (553.0, 106.0) }) = 0.0000012074182697257333 degrees
* tUusinh: Quad(QuadBez { p0: (289.0, 417.0), p1: (279.0, 393.0), p2: (266.0, 372.0) })/Quad(QuadBez { p0: (266.0, 372.0), p1: (268.0, 374.0), p2: (270.0, 376.0) }) = 13.24051991518724 degrees
* tUusinh: Quad(QuadBez { p0: (251.5, 310.0), p1: (239.0, 299.0), p2: (230.0, 288.0) })/Quad(QuadBez { p0: (230.0, 288.0), p1: (239.0, 296.0), p2: (243.0, 299.0) }) = 9.077053800929454 degrees
* nUusinh: Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* rUusinh: Quad(QuadBez { p0: (241.0, 466.5), p1: (199.0, 439.0), p2: (171.0, 413.0) })/Quad(QuadBez { p0: (171.0, 413.0), p1: (201.0, 439.0), p2: (250.0, 463.5) }) = 1.964520383313339 degrees
* ssUusinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sUusinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSsUusinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSsUusinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVUusinh: Quad(QuadBez { p0: (127.0, 187.5), p1: (185.0, 245.0), p2: (293.0, 337.0) })/Line(Line { p0: (293.0, 337.0), p1: (291.0, 336.0) }) = 13.861027563021173 degrees
* kVUusinh: Quad(QuadBez { p0: (323.0, 316.5), p1: (303.0, 301.0), p2: (291.0, 289.0) })/Quad(QuadBez { p0: (291.0, 289.0), p1: (331.0, 318.0), p2: (386.5, 343.0) }) = 9.05788812861762 degrees
* tVUusinh: Quad(QuadBez { p0: (87.0, 73.0), p1: (85.0, 69.0), p2: (84.0, 65.0) })/Quad(QuadBez { p0: (84.0, 65.0), p1: (84.0, 66.0), p2: (75.5, 71.0) }) = 14.036243467926484 degrees
* tVUusinh: Quad(QuadBez { p0: (310.0, 417.0), p1: (300.0, 393.0), p2: (287.0, 372.0) })/Quad(QuadBez { p0: (287.0, 372.0), p1: (289.0, 374.0), p2: (292.0, 377.0) }) = 13.24051991518724 degrees
* tVUusinh: Quad(QuadBez { p0: (276.5, 312.5), p1: (260.0, 298.0), p2: (252.0, 289.0) })/Quad(QuadBez { p0: (252.0, 289.0), p1: (269.0, 303.0), p2: (285.0, 312.0) }) = 8.894000815085953 degrees
* tThUusinh: Quad(QuadBez { p0: (281.5, 312.5), p1: (265.0, 298.0), p2: (257.0, 289.0) })/Quad(QuadBez { p0: (257.0, 289.0), p1: (274.0, 303.0), p2: (290.5, 312.0) }) = 8.894000815085953 degrees
* nDUusinh: Quad(QuadBez { p0: (310.0, 298.5), p1: (299.0, 286.0), p2: (288.0, 273.0) })/Quad(QuadBez { p0: (288.0, 273.0), p1: (331.0, 306.0), p2: (376.0, 330.0) }) = 12.259499330456032 degrees
* nDhUusinh: Quad(QuadBez { p0: (277.0, 289.0), p1: (266.0, 277.0), p2: (255.0, 264.0) })/Quad(QuadBez { p0: (255.0, 264.0), p1: (298.0, 296.0), p2: (343.0, 320.0) }) = 13.10753327475928 degrees
* nVUusinh: Quad(QuadBez { p0: (310.0, 298.5), p1: (299.0, 286.0), p2: (288.0, 273.0) })/Quad(QuadBez { p0: (288.0, 273.0), p1: (331.0, 306.0), p2: (376.0, 330.0) }) = 12.259499330456032 degrees
* nThUusinh: Quad(QuadBez { p0: (339.0, 317.0), p1: (337.0, 316.0), p2: (335.0, 314.0) })/Quad(QuadBez { p0: (335.0, 314.0), p1: (365.0, 332.0), p2: (394.0, 343.0) }) = 14.03624346792651 degrees
* rAesinh: Quad(QuadBez { p0: (222.0, 475.5), p1: (171.0, 443.0), p2: (138.0, 413.0) })/Quad(QuadBez { p0: (138.0, 413.0), p1: (168.0, 439.0), p2: (217.0, 463.5) }) = 1.359305786068574 degrees
* rAaesinh: Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* kRasinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* cRasinh: Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* jhRasinh: Quad(QuadBez { p0: (310.0, 334.0), p1: (268.0, 303.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (277.0, 305.0), p2: (310.5, 323.0) }) = 8.229229901467633 degrees
* nyRasinh: Quad(QuadBez { p0: (435.5, 321.0), p1: (415.0, 305.0), p2: (403.0, 294.0) })/Quad(QuadBez { p0: (403.0, 294.0), p1: (430.0, 313.0), p2: (464.0, 331.5) }) = 7.3762540210852 degrees
* ddRasinh: Quad(QuadBez { p0: (130.0, 254.5), p1: (159.0, 295.0), p2: (206.0, 317.0) })/Quad(QuadBez { p0: (206.0, 317.0), p1: (148.0, 301.0), p2: (111.5, 281.0) }) = 9.66143268745223 degrees
* ddRasinh: Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) })/Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) }) = 0.0000012074182697257333 degrees
* tRasinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* bhRasinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* ssRasinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sRasinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* nDRasinh: Quad(QuadBez { p0: (309.5, 299.0), p1: (298.0, 286.0), p2: (287.0, 273.0) })/Quad(QuadBez { p0: (287.0, 273.0), p1: (330.0, 307.0), p2: (375.5, 331.5) }) = 11.430301581627583 degrees
* khRsinh: Quad(QuadBez { p0: (192.5, 711.0), p1: (203.0, 734.0), p2: (211.0, 750.0) })/Line(Line { p0: (211.0, 750.0), p1: (206.0, 742.0) }) = 5.440332031005414 degrees
* cRsinh: Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* jhRsinh: Quad(QuadBez { p0: (836.0, 726.0), p1: (833.0, 725.0), p2: (829.0, 724.0) })/Line(Line { p0: (829.0, 724.0), p1: (836.0, 726.0) }) = 1.9091524329963898 degrees
* jhRsinh: Line(Line { p0: (829.0, 724.0), p1: (836.0, 726.0) })/Quad(QuadBez { p0: (836.0, 726.0), p1: (833.0, 725.0), p2: (829.0, 724.0) }) = 2.4895529219992745 degrees
* jhRsinh: Line(Line { p0: (755.0, 706.0), p1: (781.0, 713.0) })/Quad(QuadBez { p0: (781.0, 713.0), p1: (766.0, 710.0), p2: (760.5, 708.0) }) = 3.758555685472039 degrees
* jhRsinh: Quad(QuadBez { p0: (294.0, 312.5), p1: (275.0, 298.0), p2: (262.0, 286.0) })/Quad(QuadBez { p0: (262.0, 286.0), p1: (302.0, 315.0), p2: (357.0, 339.5) }) = 6.7672780859790445 degrees
* nyRsinh: Quad(QuadBez { p0: (438.0, 322.0), p1: (419.0, 307.0), p2: (406.0, 295.0) })/Quad(QuadBez { p0: (406.0, 295.0), p1: (446.0, 324.0), p2: (501.0, 349.0) }) = 6.7672780859790445 degrees
* ddRsinh: Quad(QuadBez { p0: (130.0, 254.5), p1: (159.0, 295.0), p2: (206.0, 317.0) })/Quad(QuadBez { p0: (206.0, 317.0), p1: (148.0, 301.0), p2: (111.5, 281.0) }) = 9.66143268745223 degrees
* ddRsinh: Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) })/Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) }) = 0.0000012074182697257333 degrees
* tRsinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* dhRsinh: Quad(QuadBez { p0: (316.0, 726.0), p1: (313.0, 725.0), p2: (309.0, 724.0) })/Line(Line { p0: (309.0, 724.0), p1: (316.0, 726.0) }) = 1.9091524329963898 degrees
* dhRsinh: Line(Line { p0: (309.0, 724.0), p1: (316.0, 726.0) })/Quad(QuadBez { p0: (316.0, 726.0), p1: (313.0, 725.0), p2: (309.0, 724.0) }) = 2.4895529219992745 degrees
* dhRsinh: Line(Line { p0: (235.0, 706.0), p1: (261.0, 713.0) })/Quad(QuadBez { p0: (261.0, 713.0), p1: (246.0, 710.0), p2: (240.5, 708.0) }) = 3.758555685472039 degrees
* bRsinh: Quad(QuadBez { p0: (323.0, 779.0), p1: (319.0, 778.0), p2: (314.0, 777.0) })/Line(Line { p0: (314.0, 777.0), p1: (323.0, 779.0) }) = 1.2188752351310335 degrees
* bRsinh: Line(Line { p0: (314.0, 777.0), p1: (323.0, 779.0) })/Quad(QuadBez { p0: (323.0, 779.0), p1: (319.0, 778.0), p2: (314.0, 777.0) }) = 1.5074357587748821 degrees
* bRsinh: Line(Line { p0: (242.0, 759.0), p1: (282.0, 769.0) })/Quad(QuadBez { p0: (282.0, 769.0), p1: (258.0, 766.0), p2: (250.0, 762.5) }) = 6.911227119024715 degrees
* bhRsinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* mRsinh: Quad(QuadBez { p0: (318.0, 773.0), p1: (315.0, 773.0), p2: (312.0, 772.0) })/Line(Line { p0: (312.0, 772.0), p1: (318.0, 773.0) }) = 8.972626614896358 degrees
* mRsinh: Line(Line { p0: (312.0, 772.0), p1: (318.0, 773.0) })/Quad(QuadBez { p0: (318.0, 773.0), p1: (315.0, 773.0), p2: (312.0, 772.0) }) = 9.462322208025613 degrees
* mRsinh: Line(Line { p0: (238.0, 754.0), p1: (268.0, 761.0) })/Quad(QuadBez { p0: (268.0, 761.0), p1: (250.0, 759.0), p2: (244.0, 756.5) }) = 6.793830560486495 degrees
* vRsinh: Line(Line { p0: (295.0, 783.0), p1: (300.0, 784.0) })/Quad(QuadBez { p0: (300.0, 784.0), p1: (297.0, 784.0), p2: (295.0, 783.0) }) = 11.309932474020195 degrees
* vRsinh: Line(Line { p0: (219.0, 765.0), p1: (249.0, 772.0) })/Quad(QuadBez { p0: (249.0, 772.0), p1: (232.0, 770.0), p2: (225.5, 767.5) }) = 6.424185498639428 degrees
* ssRsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sRsinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kRIsinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* cRIsinh: Quad(QuadBez { p0: (127.0, 239.5), p1: (153.0, 270.0), p2: (189.0, 289.0) })/Quad(QuadBez { p0: (189.0, 289.0), p1: (136.0, 274.0), p2: (96.5, 257.0) }) = 12.021582430317743 degrees
* jhRIsinh: Quad(QuadBez { p0: (85.5, 182.0), p1: (143.0, 239.0), p2: (250.0, 331.0) })/Line(Line { p0: (250.0, 331.0), p1: (248.0, 330.0) }) = 14.124322998101512 degrees
* jhRIsinh: Quad(QuadBez { p0: (282.0, 312.5), p1: (263.0, 298.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (290.0, 315.0), p2: (345.0, 339.5) }) = 6.7672780859790445 degrees
* nyRIsinh: Quad(QuadBez { p0: (435.5, 321.0), p1: (415.0, 305.0), p2: (403.0, 294.0) })/Quad(QuadBez { p0: (403.0, 294.0), p1: (430.0, 313.0), p2: (464.0, 331.5) }) = 7.3762540210852 degrees
* ddRIsinh: Quad(QuadBez { p0: (170.0, 247.0), p1: (200.0, 266.0), p2: (235.0, 278.0) })/Quad(QuadBez { p0: (235.0, 278.0), p1: (167.0, 262.0), p2: (117.0, 239.5) }) = 5.684124500863936 degrees
* ddRIsinh: Quad(QuadBez { p0: (411.0, 106.0), p1: (410.0, 105.0), p2: (411.0, 106.0) })/Quad(QuadBez { p0: (411.0, 106.0), p1: (410.0, 105.0), p2: (411.0, 106.0) }) = 0.0000012074182697257333 degrees
* tRIsinh: Quad(QuadBez { p0: (294.0, 324.0), p1: (260.0, 297.0), p2: (243.0, 279.0) })/Quad(QuadBez { p0: (243.0, 279.0), p1: (252.0, 286.0), p2: (256.0, 289.0) }) = 8.76159339051855 degrees
* bhRIsinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* ssRIsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sRIsinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* nDRIsinh: Quad(QuadBez { p0: (309.5, 299.0), p1: (298.0, 286.0), p2: (287.0, 273.0) })/Quad(QuadBez { p0: (287.0, 273.0), p1: (330.0, 307.0), p2: (375.5, 331.5) }) = 11.430301581627583 degrees
* kRIisinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* khRIisinh: Quad(QuadBez { p0: (635.5, 7.0), p1: (653.0, 55.0), p2: (661.0, 104.0) })/Quad(QuadBez { p0: (661.0, 104.0), p1: (638.0, 51.0), p2: (596.0, 21.0) }) = 14.186422304261288 degrees
* cRIisinh: Quad(QuadBez { p0: (159.0, 234.5), p1: (189.0, 269.0), p2: (229.0, 289.0) })/Quad(QuadBez { p0: (229.0, 289.0), p1: (171.0, 274.0), p2: (128.0, 256.0) }) = 12.064884410525451 degrees
* jhRIisinh: Quad(QuadBez { p0: (85.5, 182.0), p1: (143.0, 239.0), p2: (250.0, 331.0) })/Line(Line { p0: (250.0, 331.0), p1: (248.0, 330.0) }) = 14.124322998101512 degrees
* jhRIisinh: Quad(QuadBez { p0: (282.0, 312.5), p1: (263.0, 298.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (290.0, 315.0), p2: (345.0, 339.5) }) = 6.7672780859790445 degrees
* nyRIisinh: Quad(QuadBez { p0: (280.5, 193.0), p1: (339.0, 250.0), p2: (446.0, 342.0) })/Line(Line { p0: (446.0, 342.0), p1: (444.0, 341.0) }) = 14.124322998101512 degrees
* nyRIisinh: Quad(QuadBez { p0: (474.5, 321.0), p1: (454.0, 305.0), p2: (442.0, 294.0) })/Quad(QuadBez { p0: (442.0, 294.0), p1: (469.0, 313.0), p2: (503.0, 331.5) }) = 7.3762540210852 degrees
* ddRIisinh: Quad(QuadBez { p0: (238.0, 262.5), p1: (271.0, 275.0), p2: (303.0, 283.0) })/Quad(QuadBez { p0: (303.0, 283.0), p1: (247.0, 274.0), p2: (200.0, 258.5) }) = 4.906066985647847 degrees
* tRIisinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* bRIisinh: Line(Line { p0: (542.0, 673.0), p1: (558.0, 665.0) })/Quad(QuadBez { p0: (558.0, 665.0), p1: (550.0, 669.0), p2: (542.0, 673.0) }) = 0.0000012074182697257333 degrees
* bRIisinh: Quad(QuadBez { p0: (558.0, 665.0), p1: (550.0, 669.0), p2: (542.0, 673.0) })/Line(Line { p0: (542.0, 673.0), p1: (558.0, 665.0) }) = 0.0000012074182697257333 degrees
* bhRIisinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* ssRIisinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sRIisinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* nDRIisinh: Quad(QuadBez { p0: (309.5, 299.0), p1: (298.0, 286.0), p2: (287.0, 273.0) })/Quad(QuadBez { p0: (287.0, 273.0), p1: (330.0, 307.0), p2: (375.5, 331.5) }) = 11.430301581627583 degrees
* ka_rephasinh: Quad(QuadBez { p0: (307.5, 307.0), p1: (291.0, 294.0), p2: (281.0, 285.0) })/Quad(QuadBez { p0: (281.0, 285.0), p1: (308.0, 304.0), p2: (341.5, 322.0) }) = 6.853019438901028 degrees
* ca_rephasinh: Quad(QuadBez { p0: (164.0, 279.0), p1: (189.0, 300.0), p2: (217.0, 313.0) })/Quad(QuadBez { p0: (217.0, 313.0), p1: (154.0, 299.0), p2: (108.5, 279.0) }) = 12.375961098943664 degrees
* cha_rephasinh: Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) })/Quad(QuadBez { p0: (265.0, 326.0), p1: (266.0, 327.0), p2: (266.0, 327.0) }) = 0.0000012074182697257333 degrees
* jha_rephasinh: Quad(QuadBez { p0: (310.0, 334.0), p1: (268.0, 303.0), p2: (250.0, 286.0) })/Quad(QuadBez { p0: (250.0, 286.0), p1: (277.0, 305.0), p2: (310.5, 323.0) }) = 8.229229901467633 degrees
* nya_rephasinh: Quad(QuadBez { p0: (431.0, 316.5), p1: (414.0, 303.0), p2: (404.0, 294.0) })/Quad(QuadBez { p0: (404.0, 294.0), p1: (431.0, 313.0), p2: (464.5, 331.5) }) = 6.853019438901028 degrees
* dda_rephasinh: Quad(QuadBez { p0: (130.0, 254.5), p1: (159.0, 295.0), p2: (206.0, 317.0) })/Quad(QuadBez { p0: (206.0, 317.0), p1: (148.0, 301.0), p2: (111.5, 281.0) }) = 9.66143268745223 degrees
* dda_rephasinh: Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) })/Quad(QuadBez { p0: (410.0, 106.0), p1: (409.0, 105.0), p2: (410.0, 106.0) }) = 0.0000012074182697257333 degrees
* ddha_rephasinh: Quad(QuadBez { p0: (167.0, 269.0), p1: (196.0, 289.0), p2: (229.0, 301.0) })/Quad(QuadBez { p0: (229.0, 301.0), p1: (160.0, 285.0), p2: (108.0, 262.5) }) = 6.927859298103457 degrees
* nndda_rephasinh: Quad(QuadBez { p0: (262.0, 254.5), p1: (291.0, 295.0), p2: (338.0, 317.0) })/Quad(QuadBez { p0: (338.0, 317.0), p1: (280.0, 301.0), p2: (243.5, 281.0) }) = 9.66143268745223 degrees
* nndda_rephasinh: Quad(QuadBez { p0: (542.0, 106.0), p1: (541.0, 105.0), p2: (542.0, 106.0) })/Quad(QuadBez { p0: (542.0, 106.0), p1: (541.0, 105.0), p2: (542.0, 106.0) }) = 0.0000012074182697257333 degrees
* ta_rephasinh: Quad(QuadBez { p0: (281.0, 324.0), p1: (247.0, 297.0), p2: (230.0, 279.0) })/Quad(QuadBez { p0: (230.0, 279.0), p1: (239.0, 286.0), p2: (243.0, 289.0) }) = 8.76159339051855 degrees
* na_rephasinh: Quad(QuadBez { p0: (281.0, 288.0), p1: (270.0, 276.0), p2: (260.0, 264.0) })/Quad(QuadBez { p0: (260.0, 264.0), p1: (303.0, 296.0), p2: (347.5, 320.0) }) = 13.538320491767887 degrees
* bha_rephasinh: Quad(QuadBez { p0: (141.5, 266.5), p1: (165.0, 302.0), p2: (204.0, 322.0) })/Quad(QuadBez { p0: (204.0, 322.0), p1: (144.0, 308.0), p2: (99.5, 287.5) }) = 14.015659391386848 degrees
* ssa_rephasinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) })/Quad(QuadBez { p0: (266.0, 326.0), p1: (267.0, 327.0), p2: (267.0, 327.0) }) = 0.0000012074182697257333 degrees
* sa_rephasinh: Quad(QuadBez { p0: (132.5, 269.0), p1: (171.0, 310.0), p2: (225.0, 333.0) })/Quad(QuadBez { p0: (225.0, 333.0), p1: (157.0, 320.0), p2: (107.0, 298.0) }) = 12.24740102361755 degrees
* kSsa_rephasinh: Quad(QuadBez { p0: (323.0, 312.0), p1: (303.0, 297.0), p2: (291.0, 285.0) })/Quad(QuadBez { p0: (291.0, 285.0), p1: (331.0, 314.0), p2: (386.5, 339.0) }) = 9.05788812861762 degrees
* kSsa_rephasinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) })/Quad(QuadBez { p0: (817.0, 326.0), p1: (818.0, 327.0), p2: (818.0, 327.0) }) = 0.0000012074182697257333 degrees
* kVa_rephasinh: Quad(QuadBez { p0: (292.0, 312.5), p1: (273.0, 298.0), p2: (261.0, 286.0) })/Quad(QuadBez { p0: (261.0, 286.0), p1: (301.0, 315.0), p2: (355.5, 339.5) }) = 9.05788812861762 degrees
* tVa_rephasinh: Quad(QuadBez { p0: (303.0, 408.0), p1: (293.0, 384.0), p2: (280.0, 363.0) })/Quad(QuadBez { p0: (280.0, 363.0), p1: (282.0, 365.0), p2: (284.0, 367.0) }) = 13.24051991518724 degrees
* tVa_rephasinh: Quad(QuadBez { p0: (268.5, 302.5), p1: (252.0, 288.0), p2: (244.0, 280.0) })/Quad(QuadBez { p0: (244.0, 280.0), p1: (261.0, 294.0), p2: (277.5, 302.5) }) = 5.527540151656126 degrees
* tTha_rephasinh: Quad(QuadBez { p0: (281.5, 302.5), p1: (265.0, 288.0), p2: (257.0, 280.0) })/Quad(QuadBez { p0: (257.0, 280.0), p1: (274.0, 294.0), p2: (290.5, 302.5) }) = 5.527540151656126 degrees
* nDa_rephasinh: Quad(QuadBez { p0: (315.0, 307.0), p1: (306.0, 298.0), p2: (296.0, 288.0) })/Quad(QuadBez { p0: (296.0, 288.0), p1: (335.0, 316.0), p2: (375.0, 336.0) }) = 9.323591778138038 degrees
* nDha_rephasinh: Quad(QuadBez { p0: (277.0, 289.0), p1: (266.0, 277.0), p2: (255.0, 264.0) })/Quad(QuadBez { p0: (255.0, 264.0), p1: (298.0, 296.0), p2: (343.0, 320.0) }) = 13.10753327475928 degrees
* nTha_rephasinh: Quad(QuadBez { p0: (339.0, 307.0), p1: (337.0, 306.0), p2: (335.0, 304.0) })/Quad(QuadBez { p0: (335.0, 304.0), p1: (365.0, 322.0), p2: (394.0, 333.0) }) = 14.03624346792651 degrees
* Eng (U+014A): Line(Line { p0: (192.0, 605.0), p1: (194.0, 601.0) })/Quad(QuadBez { p0: (194.0, 601.0), p1: (193.0, 603.0), p2: (193.0, 604.0) }) = 0.0000012074182697257333 degrees
* p (U+0070): Quad(QuadBez { p0: (213.0, 429.5), p1: (210.0, 413.0), p2: (208.0, 406.0) })/Quad(QuadBez { p0: (208.0, 406.0), p1: (224.0, 434.0), p2: (253.0, 459.0) }) = 13.799485396019362 degrees
* fi (U+FB01): Line(Line { p0: (323.0, 494.0), p1: (326.0, 481.0) })/Line(Line { p0: (326.0, 481.0), p1: (324.0, 495.0) }) = 4.864514437760529 degrees
* u111E5 (U+111E5): Quad(QuadBez { p0: (580.5, 345.0), p1: (632.0, 285.0), p2: (658.0, 188.0) })/Quad(QuadBez { p0: (658.0, 188.0), p1: (657.0, 221.0), p2: (674.5, 246.0) }) = 13.26921579393184 degrees
* u111E9 (U+111E9): Quad(QuadBez { p0: (1060.5, 333.0), p1: (1106.0, 235.0), p2: (1126.0, 121.0) })/Line(Line { p0: (1126.0, 121.0), p1: (1126.0, 462.0) }) = 9.950626687951587 degrees
* u111EF (U+111EF): Quad(QuadBez { p0: (811.0, 296.0), p1: (822.0, 252.0), p2: (828.0, 208.0) })/Line(Line { p0: (828.0, 208.0), p1: (828.0, 459.0) }) = 7.765166018425354 degrees
* u111F3 (U+111F3): Quad(QuadBez { p0: (1131.5, 294.0), p1: (1143.0, 249.0), p2: (1149.0, 205.0) })/Line(Line { p0: (1149.0, 205.0), p1: (1149.0, 459.0) }) = 7.765166018425354 degrees
* uni0DEE (U+0DEE): Quad(QuadBez { p0: (230.0, 466.5), p1: (188.0, 439.0), p2: (160.0, 413.0) })/Quad(QuadBez { p0: (160.0, 413.0), p1: (190.0, 439.0), p2: (239.0, 463.5) }) = 1.964520383313339 degrees
* asterisk (U+002A): Quad(QuadBez { p0: (130.0, 615.0), p1: (128.0, 618.0), p2: (126.0, 621.0) })/Quad(QuadBez { p0: (126.0, 621.0), p1: (130.0, 611.0), p2: (130.0, 615.0) }) = 11.888658039627936 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (959.0, 214.0), p1: (959.0, 219.0), p2: (960.0, 223.0) })/Quad(QuadBez { p0: (960.0, 223.0), p1: (947.0, 186.0), p2: (934.5, 146.0) }) = 5.322750707768328 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (612.5, 119.0), p1: (608.0, 166.0), p2: (605.0, 237.0) })/Quad(QuadBez { p0: (605.0, 237.0), p1: (602.0, 207.0), p2: (595.0, 166.0) }) = 8.13010235415596 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (502.0, 77.5), p1: (494.0, 127.0), p2: (490.0, 184.0) })/Quad(QuadBez { p0: (490.0, 184.0), p1: (485.0, 156.0), p2: (476.5, 118.5) }) = 14.138847350808856 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (644.0, 197.0), p1: (646.0, 153.0), p2: (651.0, 95.0) })/Quad(QuadBez { p0: (651.0, 95.0), p1: (657.0, 153.0), p2: (671.5, 207.5) }) = 10.833251061419492 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (890.5, 164.5), p1: (893.0, 133.0), p2: (894.0, 119.0) })/Quad(QuadBez { p0: (894.0, 119.0), p1: (895.0, 134.0), p2: (904.5, 163.0) }) = 7.899691614265202 degrees
* questiondown (U+00BF): Quad(QuadBez { p0: (256.0, 398.0), p1: (257.0, 399.0), p2: (256.0, 398.0) })/Quad(QuadBez { p0: (256.0, 398.0), p1: (257.0, 399.0), p2: (256.0, 398.0) }) = 0.0000012074182697257333 degrees
* trademark (U+2122): Quad(QuadBez { p0: (343.5, 578.5), p1: (340.0, 591.0), p2: (339.0, 598.0) })/Line(Line { p0: (339.0, 598.0), p1: (337.0, 531.0) }) = 9.839916398297511 degrees
* uni20A6 (U+20A6): Line(Line { p0: (192.0, 605.0), p1: (194.0, 601.0) })/Quad(QuadBez { p0: (194.0, 601.0), p1: (193.0, 603.0), p2: (193.0, 604.0) }) = 0.0000012074182697257333 degrees [code: found-jaggy-segments]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments (overlapping_path_segments)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have overlapping path segments:

* uni0D9E (U+0D9E): Line(Line { p0: (369.0, 106.0), p1: (369.0, 106.0) }) has the same coordinates as a previous segment.
* uni0D9E (U+0D9E): Quad(QuadBez { p0: (369.0, 106.0), p1: (369.0, 106.0), p2: (369.0, 106.0) }) has the same coordinates as a previous segment.
* uni0DA1 (U+0DA1): Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) }) has the same coordinates as a previous segment.
* uni0DA4 (U+0DA4): Line(Line { p0: (942.0, 536.0), p1: (942.0, 536.0) }) has the same coordinates as a previous segment.
* uni0DA8 (U+0DA8): Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* uni0DA8 (U+0DA8): Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* uni0DC2 (U+0DC2): Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSsasinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* tVasinh: Line(Line { p0: (80.0, 62.0), p1: (80.0, 66.0) }) has the same coordinates as a previous segment.
* ngsinh: Line(Line { p0: (369.0, 106.0), p1: (369.0, 106.0) }) has the same coordinates as a previous segment.
* ngsinh: Quad(QuadBez { p0: (369.0, 106.0), p1: (369.0, 106.0), p2: (369.0, 106.0) }) has the same coordinates as a previous segment.
* chsinh: Line(Line { p0: (255.0, 327.0), p1: (254.0, 326.0) }) has the same coordinates as a previous segment.
* jhsinh: Line(Line { p0: (829.0, 724.0), p1: (836.0, 726.0) }) has the same coordinates as a previous segment.
* nysinh: Line(Line { p0: (942.0, 536.0), p1: (942.0, 536.0) }) has the same coordinates as a previous segment.
* tthsinh: Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* tthsinh: Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* dhsinh: Line(Line { p0: (309.0, 724.0), p1: (316.0, 726.0) }) has the same coordinates as a previous segment.
* bsinh: Line(Line { p0: (314.0, 777.0), p1: (323.0, 779.0) }) has the same coordinates as a previous segment.
* msinh: Line(Line { p0: (312.0, 772.0), p1: (318.0, 773.0) }) has the same coordinates as a previous segment.
* mbsinh: Line(Line { p0: (310.0, 771.0), p1: (318.0, 773.0) }) has the same coordinates as a previous segment.
* vsinh: Line(Line { p0: (295.0, 783.0), p1: (300.0, 784.0) }) has the same coordinates as a previous segment.
* sssinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSssinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* kVsinh: Line(Line { p0: (801.0, 783.0), p1: (806.0, 784.0) }) has the same coordinates as a previous segment.
* tVsinh: Line(Line { p0: (131.0, 57.0), p1: (131.0, 57.0) }) has the same coordinates as a previous segment.
* tVsinh: Line(Line { p0: (824.0, 783.0), p1: (829.0, 784.0) }) has the same coordinates as a previous segment.
* nDhsinh: Line(Line { p0: (781.0, 724.0), p1: (788.0, 726.0) }) has the same coordinates as a previous segment.
* nVsinh: Line(Line { p0: (771.0, 783.0), p1: (776.0, 784.0) }) has the same coordinates as a previous segment.
* dVsinh: Line(Line { p0: (441.0, 783.0), p1: (446.0, 784.0) }) has the same coordinates as a previous segment.
* kIsinh: Line(Line { p0: (479.0, 406.0), p1: (479.0, 406.0) }) has the same coordinates as a previous segment.
* ngIsinh: Line(Line { p0: (369.0, 106.0), p1: (369.0, 106.0) }) has the same coordinates as a previous segment.
* ngIsinh: Quad(QuadBez { p0: (369.0, 106.0), p1: (369.0, 106.0), p2: (369.0, 106.0) }) has the same coordinates as a previous segment.
* chIsinh: Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) }) has the same coordinates as a previous segment.
* nyIsinh: Line(Line { p0: (942.0, 536.0), p1: (942.0, 536.0) }) has the same coordinates as a previous segment.
* tthIsinh: Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* tthIsinh: Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* ssIsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSsIsinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* tVIsinh: Line(Line { p0: (80.0, 62.0), p1: (80.0, 66.0) }) has the same coordinates as a previous segment.
* ngIisinh: Line(Line { p0: (369.0, 106.0), p1: (369.0, 106.0) }) has the same coordinates as a previous segment.
* ngIisinh: Quad(QuadBez { p0: (369.0, 106.0), p1: (369.0, 106.0), p2: (369.0, 106.0) }) has the same coordinates as a previous segment.
* chIisinh: Line(Line { p0: (244.0, 327.0), p1: (243.0, 326.0) }) has the same coordinates as a previous segment.
* nyIisinh: Line(Line { p0: (942.0, 536.0), p1: (942.0, 536.0) }) has the same coordinates as a previous segment.
* nyIisinh: Line(Line { p0: (944.0, 536.0), p1: (944.0, 536.0) }) has the same coordinates as a previous segment.
* tthIisinh: Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* tthIisinh: Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* ddIisinh: Line(Line { p0: (409.0, 106.0), p1: (409.0, 106.0) }) has the same coordinates as a previous segment.
* ddIisinh: Quad(QuadBez { p0: (409.0, 106.0), p1: (409.0, 106.0), p2: (409.0, 106.0) }) has the same coordinates as a previous segment.
* nnddIisinh: Line(Line { p0: (544.0, 106.0), p1: (544.0, 106.0) }) has the same coordinates as a previous segment.
* nnddIisinh: Quad(QuadBez { p0: (544.0, 106.0), p1: (544.0, 106.0), p2: (544.0, 106.0) }) has the same coordinates as a previous segment.
* bIisinh: Quad(QuadBez { p0: (558.0, 665.0), p1: (550.0, 669.0), p2: (542.0, 673.0) }) has the same coordinates as a previous segment.
* ssIisinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSsIisinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* tVIisinh: Line(Line { p0: (87.0, 62.0), p1: (87.0, 64.0) }) has the same coordinates as a previous segment.
* kUsinh: Quad(QuadBez { p0: (659.0, 97.0), p1: (659.0, 97.0), p2: (659.0, 97.0) }) has the same coordinates as a previous segment.
* chUsinh: Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) }) has the same coordinates as a previous segment.
* tthUsinh: Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* tthUsinh: Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* ssUsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSsUsinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* tVUsinh: Line(Line { p0: (87.0, 72.0), p1: (87.0, 73.0) }) has the same coordinates as a previous segment.
* tThUsinh: Line(Line { p0: (93.0, 71.0), p1: (93.0, 74.0) }) has the same coordinates as a previous segment.
* chUusinh: Line(Line { p0: (277.0, 327.0), p1: (276.0, 326.0) }) has the same coordinates as a previous segment.
* nyUusinh: Line(Line { p0: (921.0, 534.0), p1: (921.0, 534.0) }) has the same coordinates as a previous segment.
* tthUusinh: Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* tthUusinh: Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* tUusinh: Line(Line { p0: (585.0, 90.0), p1: (585.0, 90.0) }) has the same coordinates as a previous segment.
* ssUusinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSsUusinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* tVUusinh: Line(Line { p0: (87.0, 72.0), p1: (87.0, 73.0) }) has the same coordinates as a previous segment.
* ssRasinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* jhRsinh: Line(Line { p0: (829.0, 724.0), p1: (836.0, 726.0) }) has the same coordinates as a previous segment.
* dhRsinh: Line(Line { p0: (309.0, 724.0), p1: (316.0, 726.0) }) has the same coordinates as a previous segment.
* bRsinh: Line(Line { p0: (314.0, 777.0), p1: (323.0, 779.0) }) has the same coordinates as a previous segment.
* mRsinh: Line(Line { p0: (312.0, 772.0), p1: (318.0, 773.0) }) has the same coordinates as a previous segment.
* vRsinh: Line(Line { p0: (295.0, 783.0), p1: (300.0, 784.0) }) has the same coordinates as a previous segment.
* ssRsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kRIsinh: Line(Line { p0: (479.0, 406.0), p1: (479.0, 406.0) }) has the same coordinates as a previous segment.
* ssRIsinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* ddRIisinh: Line(Line { p0: (409.0, 106.0), p1: (409.0, 106.0) }) has the same coordinates as a previous segment.
* ddRIisinh: Quad(QuadBez { p0: (409.0, 106.0), p1: (409.0, 106.0), p2: (409.0, 106.0) }) has the same coordinates as a previous segment.
* bRIisinh: Quad(QuadBez { p0: (558.0, 665.0), p1: (550.0, 669.0), p2: (542.0, 673.0) }) has the same coordinates as a previous segment.
* ssRIisinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* nga_rephasinh: Line(Line { p0: (369.0, 106.0), p1: (369.0, 106.0) }) has the same coordinates as a previous segment.
* nga_rephasinh: Quad(QuadBez { p0: (369.0, 106.0), p1: (369.0, 106.0), p2: (369.0, 106.0) }) has the same coordinates as a previous segment.
* cha_rephasinh: Line(Line { p0: (266.0, 327.0), p1: (265.0, 326.0) }) has the same coordinates as a previous segment.
* nya_rephasinh: Line(Line { p0: (942.0, 536.0), p1: (942.0, 536.0) }) has the same coordinates as a previous segment.
* ttha_rephasinh: Line(Line { p0: (339.0, 124.0), p1: (339.0, 124.0) }) has the same coordinates as a previous segment.
* ttha_rephasinh: Quad(QuadBez { p0: (339.0, 124.0), p1: (339.0, 124.0), p2: (339.0, 124.0) }) has the same coordinates as a previous segment.
* ssa_rephasinh: Line(Line { p0: (267.0, 327.0), p1: (266.0, 326.0) }) has the same coordinates as a previous segment.
* kSsa_rephasinh: Line(Line { p0: (818.0, 327.0), p1: (817.0, 326.0) }) has the same coordinates as a previous segment.
* tVa_rephasinh: Line(Line { p0: (80.0, 62.0), p1: (80.0, 66.0) }) has the same coordinates as a previous segment.
* Ccedilla (U+00C7): Line(Line { p0: (376.0, -81.0), p1: (376.0, -82.0) }) has the same coordinates as a previous segment.
* Scedilla (U+015E): Line(Line { p0: (292.0, -81.0), p1: (292.0, -82.0) }) has the same coordinates as a previous segment.
* uni0162 (U+0162): Line(Line { p0: (314.0, -81.0), p1: (314.0, -82.0) }) has the same coordinates as a previous segment.
* ccedilla (U+00E7): Line(Line { p0: (278.0, -76.0), p1: (278.0, -77.0) }) has the same coordinates as a previous segment.
* scedilla (U+015F): Line(Line { p0: (267.0, -92.0), p1: (267.0, -93.0) }) has the same coordinates as a previous segment.
* uni0163 (U+0163): Line(Line { p0: (235.0, -92.0), p1: (235.0, -93.0) }) has the same coordinates as a previous segment.
* u111F1 (U+111F1): Line(Line { p0: (316.0, 457.0), p1: (316.0, 457.0) }) has the same coordinates as a previous segment.
* asterisk (U+002A): Quad(QuadBez { p0: (126.0, 621.0), p1: (130.0, 611.0), p2: (130.0, 615.0) }) has the same coordinates as a previous segment.
* uni0327 (U+0327): Line(Line { p0: (32.0, -77.0), p1: (32.0, -78.0) }) has the same coordinates as a previous segment.
* cedilla (U+00B8): Line(Line { p0: (138.0, -77.0), p1: (138.0, -78.0) }) has the same coordinates as a previous segment. [code: overlapping-path-segments]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? (outline_semi_vertical)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

* uni0DDA (U+0DDA): Line(Line { p0: (711.0, 401.0), p1: (714.0, 745.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* uni0DDD (U+0DDD): Line(Line { p0: (825.0, 401.0), p1: (828.0, 745.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* uni0DCA (U+0DCA): Line(Line { p0: (-29.0, 401.0), p1: (-26.0, 745.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* aasign_viramasinh: Line(Line { p0: (143.0, 474.0), p1: (144.0, 784.0) }) (angle: 89.82 degrees, expected: 90.00 degrees)
* ksinh: Line(Line { p0: (735.0, 459.0), p1: (738.0, 803.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* gsinh: Line(Line { p0: (628.0, 448.0), p1: (631.0, 792.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* ghsinh: Line(Line { p0: (617.0, 439.0), p1: (620.0, 783.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* nngsinh: Line(Line { p0: (724.0, 448.0), p1: (727.0, 792.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* nysinh: Line(Line { p0: (1023.0, 475.0), p1: (1026.0, 819.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* jnysinh: Line(Line { p0: (878.0, 448.0), p1: (881.0, 792.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* tthsinh: Line(Line { p0: (584.0, 426.0), p1: (587.0, 770.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* ddhsinh: Line(Line { p0: (640.0, 401.0), p1: (643.0, 745.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* nnsinh: Line(Line { p0: (897.0, 424.0), p1: (900.0, 768.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* tsinh: Line(Line { p0: (711.0, 449.0), p1: (714.0, 793.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* thsinh: Line(Line { p0: (542.0, 423.0), p1: (545.0, 767.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* dsinh: Line(Line { p0: (357.0, 475.0), p1: (360.0, 819.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* nsinh: Line(Line { p0: (700.0, 475.0), p1: (703.0, 819.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* phsinh: Line(Line { p0: (546.0, 499.0), p1: (549.0, 843.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* bhsinh: Line(Line { p0: (633.0, 433.0), p1: (636.0, 777.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* rsinh: Line(Line { p0: (59.0, 328.0), p1: (62.0, 833.0) }) (angle: 89.66 degrees, expected: 90.00 degrees)
* lsinh: Line(Line { p0: (615.0, 452.0), p1: (618.0, 796.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* shsinh: Line(Line { p0: (658.0, 445.0), p1: (661.0, 789.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* sssinh: Line(Line { p0: (533.0, 467.0), p1: (536.0, 811.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* ssinh: Line(Line { p0: (613.0, 489.0), p1: (616.0, 833.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* hsinh: Line(Line { p0: (652.0, 471.0), p1: (655.0, 815.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* llsinh: Line(Line { p0: (538.0, 494.0), p1: (541.0, 838.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* fsinh: Line(Line { p0: (565.0, 439.0), p1: (568.0, 783.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* tThsinh: Line(Line { p0: (1031.0, 584.0), p1: (1033.0, 832.0) }) (angle: 89.54 degrees, expected: 90.00 degrees)
* nDsinh: Line(Line { p0: (829.0, 475.0), p1: (832.0, 819.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* ttTthsinh: Line(Line { p0: (718.0, 426.0), p1: (721.0, 770.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* nyUsinh: Line(Line { p0: (1128.0, -262.0), p1: (847.0, -264.0) }) (angle: -179.59 degrees, expected: -180.00 degrees)
* dUsinh: Line(Line { p0: (495.0, -262.0), p1: (214.0, -264.0) }) (angle: -179.59 degrees, expected: -180.00 degrees)
* ndUsinh: Line(Line { p0: (596.0, -262.0), p1: (315.0, -264.0) }) (angle: -179.59 degrees, expected: -180.00 degrees)
* mUsinh: Line(Line { p0: (690.0, 241.0), p1: (688.0, -231.0) }) (angle: -90.24 degrees, expected: -90.00 degrees)
* vUsinh: Line(Line { p0: (616.0, 196.0), p1: (614.0, -234.0) }) (angle: -90.27 degrees, expected: -90.00 degrees)
* kVUsinh: Line(Line { p0: (1146.0, 196.0), p1: (1144.0, -234.0) }) (angle: -90.27 degrees, expected: -90.00 degrees)
* tVUsinh: Line(Line { p0: (1097.0, 196.0), p1: (1095.0, -234.0) }) (angle: -90.27 degrees, expected: -90.00 degrees)
* nDUsinh: Line(Line { p0: (990.0, -262.0), p1: (709.0, -264.0) }) (angle: -179.59 degrees, expected: -180.00 degrees)
* nVUsinh: Line(Line { p0: (1120.0, 196.0), p1: (1118.0, -234.0) }) (angle: -90.27 degrees, expected: -90.00 degrees)
* dVUsinh: Line(Line { p0: (762.0, 196.0), p1: (760.0, -234.0) }) (angle: -90.27 degrees, expected: -90.00 degrees)
* khUusinh: Line(Line { p0: (697.0, 238.0), p1: (699.0, -200.0) }) (angle: -89.74 degrees, expected: -90.00 degrees)
* ghUusinh: Line(Line { p0: (733.0, 118.0), p1: (735.0, -271.0) }) (angle: -89.71 degrees, expected: -90.00 degrees)
* jhUusinh: Line(Line { p0: (1191.0, 287.0), p1: (1193.0, -173.0) }) (angle: -89.75 degrees, expected: -90.00 degrees)
* ddUusinh: Line(Line { p0: (733.0, 211.0), p1: (735.0, -184.0) }) (angle: -89.71 degrees, expected: -90.00 degrees)
* ddhUusinh: Line(Line { p0: (712.0, 159.0), p1: (714.0, -260.0) }) (angle: -89.73 degrees, expected: -90.00 degrees)
* nnUusinh: Line(Line { p0: (1007.0, 279.0), p1: (1010.0, -205.0) }) (angle: -89.64 degrees, expected: -90.00 degrees)
* nnddUusinh: Line(Line { p0: (876.0, 211.0), p1: (878.0, -184.0) }) (angle: -89.71 degrees, expected: -90.00 degrees)
* dhUusinh: Line(Line { p0: (690.0, 240.0), p1: (692.0, -216.0) }) (angle: -89.75 degrees, expected: -90.00 degrees)
* nUusinh: Line(Line { p0: (854.0, 144.0), p1: (857.0, -271.0) }) (angle: -89.59 degrees, expected: -90.00 degrees)
* pUusinh: Line(Line { p0: (651.0, 170.0), p1: (653.0, -249.0) }) (angle: -89.73 degrees, expected: -90.00 degrees)
* bUusinh: Line(Line { p0: (712.0, 228.0), p1: (714.0, -170.0) }) (angle: -89.71 degrees, expected: -90.00 degrees)
* mbUusinh: Line(Line { p0: (722.0, 128.0), p1: (724.0, -260.0) }) (angle: -89.70 degrees, expected: -90.00 degrees)
* yUusinh: Line(Line { p0: (708.0, 127.0), p1: (705.0, -230.0) }) (angle: -90.48 degrees, expected: -90.00 degrees)
* ssUusinh: Line(Line { p0: (647.0, 157.0), p1: (649.0, -238.0) }) (angle: -89.71 degrees, expected: -90.00 degrees)
* sUusinh: Line(Line { p0: (745.0, 125.0), p1: (747.0, -260.0) }) (angle: -89.70 degrees, expected: -90.00 degrees)
* fUusinh: Line(Line { p0: (738.0, 221.0), p1: (741.0, -183.0) }) (angle: -89.57 degrees, expected: -90.00 degrees)
* kSsUusinh: Line(Line { p0: (1199.0, 160.0), p1: (1201.0, -238.0) }) (angle: -89.71 degrees, expected: -90.00 degrees)
* nDhUusinh: Line(Line { p0: (1126.0, 117.0), p1: (1127.0, -249.0) }) (angle: -89.84 degrees, expected: -90.00 degrees)
* dDhUusinh: Line(Line { p0: (831.0, 119.0), p1: (833.0, -260.0) }) (angle: -89.70 degrees, expected: -90.00 degrees)
* ttTthUusinh: Line(Line { p0: (822.0, 172.0), p1: (819.0, -232.0) }) (angle: -90.43 degrees, expected: -90.00 degrees)
* gRsinh: Line(Line { p0: (651.0, 423.0), p1: (654.0, 767.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* ghRsinh: Line(Line { p0: (618.0, 530.0), p1: (620.0, 783.0) }) (angle: 89.55 degrees, expected: 90.00 degrees)
* jnyRsinh: Line(Line { p0: (745.0, 448.0), p1: (748.0, 792.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* tRsinh: Line(Line { p0: (711.0, 449.0), p1: (714.0, 793.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* dRsinh: Line(Line { p0: (351.0, 379.0), p1: (354.0, 723.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* pRsinh: Line(Line { p0: (534.0, 459.0), p1: (537.0, 803.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* bhRsinh: Line(Line { p0: (634.0, 514.0), p1: (636.0, 777.0) }) (angle: 89.56 degrees, expected: 90.00 degrees)
* shRsinh: Line(Line { p0: (658.0, 445.0), p1: (661.0, 789.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* hRsinh: Line(Line { p0: (652.0, 471.0), p1: (655.0, 815.0) }) (angle: 89.50 degrees, expected: 90.00 degrees)
* fRsinh: Line(Line { p0: (566.0, 499.0), p1: (568.0, 783.0) }) (angle: 89.60 degrees, expected: 90.00 degrees)
* D (U+0044): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* uni01C4 (U+01C4): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* Dcaron (U+010E): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* Dcroat (U+0110): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* uni1E0C (U+1E0C): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* uni01C5 (U+01C5): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* Eth (U+00D0): Line(Line { p0: (287.0, 1.0), p1: (27.0, 0.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* uni018F (U+018F): Line(Line { p0: (36.0, 351.0), p1: (464.0, 353.0) }) (angle: 0.27 degrees, expected: 0.00 degrees)
* Eng (U+014A): Line(Line { p0: (293.0, 0.0), p1: (33.0, -1.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* ae (U+00E6): Line(Line { p0: (784.0, 245.0), p1: (451.0, 243.0) }) (angle: -179.66 degrees, expected: -180.00 degrees)
* aeacute (U+01FD): Line(Line { p0: (784.0, 245.0), p1: (451.0, 243.0) }) (angle: -179.66 degrees, expected: -180.00 degrees)
* e (U+0065): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* eacute (U+00E9): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* ebreve (U+0115): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* ecaron (U+011B): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* ecircumflex (U+00EA): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EBF (U+1EBF): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EC7 (U+1EC7): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EC1 (U+1EC1): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EC3 (U+1EC3): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EC5 (U+1EC5): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni0205 (U+0205): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* edieresis (U+00EB): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* edotaccent (U+0117): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EB9 (U+1EB9): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* egrave (U+00E8): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EBB (U+1EBB): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni0207 (U+0207): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* emacron (U+0113): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* eogonek (U+0119): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni1EBD (U+1EBD): Line(Line { p0: (475.0, 245.0), p1: (143.0, 243.0) }) (angle: -179.65 degrees, expected: -180.00 degrees)
* uni0259 (U+0259): Line(Line { p0: (60.0, 243.0), p1: (392.0, 244.0) }) (angle: 0.17 degrees, expected: 0.00 degrees)
* kgreenlandic (U+0138): Line(Line { p0: (378.0, 0.0), p1: (133.0, -1.0) }) (angle: -179.77 degrees, expected: -180.00 degrees)
* oe (U+0153): Line(Line { p0: (857.0, 245.0), p1: (524.0, 243.0) }) (angle: -179.66 degrees, expected: -180.00 degrees)
* bracketleft (U+005B): Line(Line { p0: (68.0, 690.0), p1: (242.0, 689.0) }) (angle: -0.33 degrees, expected: 0.00 degrees)
* bracketright (U+005D): Line(Line { p0: (150.0, 689.0), p1: (325.0, 690.0) }) (angle: 0.33 degrees, expected: 0.00 degrees)
* uni20BC (U+20BC): Line(Line { p0: (839.0, -1.0), p1: (557.0, 0.0) }) (angle: 179.80 degrees, expected: 180.00 degrees)
* uni20BC (U+20BC): Line(Line { p0: (331.0, 0.0), p1: (64.0, -1.0) }) (angle: -179.79 degrees, expected: -180.00 degrees)
* uni20A6 (U+20A6): Line(Line { p0: (293.0, 0.0), p1: (33.0, -1.0) }) (angle: -179.78 degrees, expected: -180.00 degrees)
* sterling (U+00A3): Line(Line { p0: (469.0, 1.0), p1: (57.0, 0.0) }) (angle: -179.86 degrees, expected: -180.00 degrees)
* uusignsinh.alt: Line(Line { p0: (25.0, 213.0), p1: (27.0, -228.0) }) (angle: -89.74 degrees, expected: -90.00 degrees)
* uusignsinh.alt3: Line(Line { p0: (21.0, 238.0), p1: (24.0, -227.0) }) (angle: -89.63 degrees, expected: -90.00 degrees)
* fsinh.alt: Line(Line { p0: (509.0, 667.0), p1: (510.0, 805.0) }) (angle: 89.58 degrees, expected: 90.00 degrees)
* fRsinh.alt: Line(Line { p0: (510.0, 667.0), p1: (511.0, 805.0) }) (angle: 89.58 degrees, expected: 90.00 degrees)
* fUusinh.alt: Line(Line { p0: (688.0, 167.0), p1: (690.0, -207.0) }) (angle: -89.69 degrees, expected: -90.00 degrees) [code: found-semi-vertical]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (googlefonts/meta/script_lang_tags)</summary>
    <div>








- ⚠️ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Description strings in the name table must not exceed 200 characters. (googlefonts/name/description_max_length)</summary>
    <div>








- ⚠️ **WARN** A few name table entries with ID=10 (NameID.DESCRIPTION) are longer than 200 characters. Please check whether those entries are copyright notices mistakenly stored in the description string entries by a bug in an old FontLab version. If that's the case, then such copyright notices must be removed from these entries. [code: too-long]
  
  

</div>
</details>


</div>
</details>


<details><summary>[2] fonts/ttf</summary>
<div>


<details>
    <summary>⚠️ <b>WARN</b> Ensure Fonts have 'ital' STAT axis. (opentype/STAT/ital_axis)</summary>
    <div>








- ⚠️ **WARN** Static font is missing the 'STAT' table. [code: no-stat-table]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. (googlefonts/metadata/unreachable_subsetting)</summary>
    <div>








- ⚠️ **WARN** fonts/ttf/ManameCANARY-Regular.ttf: The following codepoints supported by the font are not covered by any subsets defined in the font's metadata file, and will never be served. You can solve this by either manually adding additional subset declarations to METADATA.pb, or by editing the glyphset definitions.

* U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
* U+02D9 DOT ABOVE: try adding one of: yi, canadian-aboriginal
* U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
* U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: math, coptic, cherokee, tifinagh
* U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
* U+0307 COMBINING DOT ABOVE: try adding one of: duployan, old-permic, coptic, syriac, tai-le, hebrew, math, tifinagh, canadian-aboriginal, malayalam, todhri
* U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac
* U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
* U+030C COMBINING CARON: try adding one of: cherokee, tai-le
* U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic
* U+0312 COMBINING TURNED COMMA ABOVE: try adding math
* U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac, duployan
* U+0326 COMBINING COMMA BELOW: try adding math
* U+0327 COMBINING CEDILLA: try adding math
* U+032E COMBINING BREVE BELOW: try adding syriac
* U+0331 COMBINING MACRON BELOW: try adding one of: cherokee, gothic, syriac, tifinagh, thai, caucasian-albanian, sunuwar
* U+2021 DOUBLE DAGGER: try adding adlam
* U+2030 PER MILLE SIGN: try adding adlam
* U+2116 NUMERO SIGN: try adding cyrillic
* U+2219 BULLET OPERATOR: try adding one of: yi, symbols, tai-tham, math
* U+2248 ALMOST EQUAL TO: try adding math
* U+2260 NOT EQUAL TO: try adding math
* U+2264 LESS-THAN OR EQUAL TO: try adding math
* U+2265 GREATER-THAN OR EQUAL TO: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: latin-ext, latin, sinhala, vietnamese [code: unreachable-subsetting]
  
  

</div>
</details>


</div>
</details>






### Summary

| 🔥 FAIL | ⚠️ WARN | ℹ️ INFO | ✅ PASS | ⏩ SKIP | 
| ---|---|---|---|---|
| 1 | 18 | 20 | 98 | 84 | 
| 0% | 8% | 9% | 44% | 38% | 



