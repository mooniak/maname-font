## FontSpector report

fontspector version: 1.9.0






## Check results




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








- ⚠️ **WARN** fonts/ttf/ManameDEVCANARY-Regular.ttf: The following codepoints supported by the font are not covered by any subsets defined in the font's metadata file, and will never be served. You can solve this by either manually adding additional subset declarations to METADATA.pb, or by editing the glyphset definitions.

* U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
* U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
* U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
* U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, cherokee, tifinagh
* U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic
* U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, tai-le, todhri, hebrew, math, old-permic, coptic, canadian-aboriginal, syriac, malayalam, duployan
* U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac
* U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
* U+030C COMBINING CARON: try adding one of: tai-le, cherokee
* U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic
* U+0312 COMBINING TURNED COMMA ABOVE: try adding math
* U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee
* U+0326 COMBINING COMMA BELOW: try adding math
* U+0327 COMBINING CEDILLA: try adding math
* U+032E COMBINING BREVE BELOW: try adding syriac
* U+0331 COMBINING MACRON BELOW: try adding one of: caucasian-albanian, gothic, sunuwar, thai, syriac, tifinagh, cherokee
* U+2219 BULLET OPERATOR: try adding one of: tai-tham, yi, math, symbols

Or you can add the above codepoints to one of the subsets supported by the font: latin-ext, latin, sinhala, vietnamese [code: unreachable-subsetting]
  
  

</div>
</details>


</div>
</details>


<details><summary>[18] fonts/ttf/ManameDEVCANARY-Regular.ttf</summary>
<div>


<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. (base_has_width)</summary>
    <div>








- 🔥 **FAIL** The following glyphs had zero advance width:

* uni02C9 (Some(713)) [code: zero-width-bases]
  
  

</div>
</details>





<details>
    <summary>🔥 <b>FAIL</b> Directory name in GFonts repo structure must
    match NameID 1 of the regular. (googlefonts/repo/dirname_matches_nameid_1)</summary>
    <div>








- 🔥 **FAIL** Family name on the name table ('Maname DEV CANARY') does not match directory name in the repo structure ('ttf'). Expected 'manamedevcanary'. [code: mismatch]
  
  

</div>
</details>





<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. (dotted_circle)</summary>
    <div>








- 🔥 **FAIL** The following glyphs could not be attached to the dotted circle glyph:

* uni0DCA [code: unattached-dotted-circle-marks]
  
  

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
* nine (U+0039): found 3, expected one of: [1, 2, 5]
* uni0327 (U+0327): found 2, expected one of: [1]
* cedilla (U+00B8): found 2, expected one of: [1, 5] [code: contour-count]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Ensure indic fonts have the Indian Rupee Sign glyph. (rupee)</summary>
    <div>








- ⚠️ **WARN** Font is missing the Indian Rupee Sign glyph. Please add a glyph for Indian Rupee Sign (₹) at codepoint U+20B9. [code: missing-rupee]
  
  

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
* na_rephasinh
* uni01EA (U+01EA)
* uhorn (U+01B0)
* uni0DDD (U+0DDD)
* ghsinh
* ssinh
* uni1EE9 (U+1EE9)
* uni1EF1 (U+1EF1)
* uni1EDB (U+1EDB)
* aogonek (U+0105)
* uni1EE0 (U+1EE0)
* ka_rephasinh
* tta_rephasinh
* uni1EDA (U+1EDA)
* nndda_rephasinh
* uni01EB (U+01EB)
* va_rephasinh
* ttTthsinh
* kSsIisinh
* ssRasinh
* ttha_rephasinh
* nDsinh
* iogonek (U+012F)
* ssIisinh
* ssUsinh
* kSsa_rephasinh
* bha_rephasinh
* uni1EDE (U+1EDE)
* bhsinh
* kha_rephasinh
* mUusinh
* ssRIisinh
* eogonek (U+0119)
* sssinh
* dsinh
* uni1EE1 (U+1EE1)
* nda_rephasinh
* fa_rephasinh.alt
* chUusinh
* Ohorn (U+01A0)
* uni1EEB (U+1EEB)
* nnga_rephasinh
* Eth (U+00D0)
* Uogonek (U+0172)
* chsinh
* sha_rephasinh
* jnya_rephasinh
* shRsinh
* uni1EDC (U+1EDC)
* Iogonek (U+012E)
* kSsIsinh
* hsinh
* thUsinh
* ma_rephasinh
* thsinh
* uni1EEF (U+1EEF)
* ta_rephasinh
* dha_rephasinh
* gRsinh
* hRsinh
* gsinh
* fIisinh
* kSsasinh
* uni1EED (U+1EED)
* fa_rephasinh
* la_rephasinh
* yasign_repha_aasignsinh
* tthUsinh
* ttUusinh
* uni1EE3 (U+1EE3)
* fsinh
* tthUusinh
* nga_rephasinh
* kSsUusinh
* pha_rephasinh
* uni1EDD (U+1EDD)
* uni0DC2 (U+0DC2)
* ca_rephasinh
* kSsUsinh
* yasign_rephasinh
* nngsinh
* Oslashacute (U+01FE)
* ddhsinh
* nsinh
* ssa_rephasinh
* nysinh
* ksinh
* dda_rephasinh
* ssRIsinh
* Eogonek (U+0118)
* scedilla (U+015F)
* chIsinh
* tthsinh
* gha_rephasinh
* ohungarumlaut (U+0151)
* Dcroat (U+0110)
* thUusinh
* ccedilla (U+00E7)
* tsinh
* ssIsinh
* da_rephasinh
* jnyRsinh
* Scedilla (U+015E)
* nnsinh
* phUsinh
* chIisinh
* ba_rephasinh
* ssUusinh
* chUsinh
* nna_rephasinh
* ssRsinh
* shsinh
* phsinh
* phUusinh
* pRsinh
* jha_rephasinh
* ga_rephasinh
* dRsinh
* uni1EE2 (U+1EE2)
* mba_rephasinh
* uni0DA1 (U+0DA1)
* lsinh
* Oslash (U+00D8)
* oslash (U+00F8)
* uni1EDF (U+1EDF)
* ohorn (U+01A1)
* nya_rephasinh
* Ccedilla (U+00C7)
* kSssinh
* llsinh
* cha_rephasinh
* jnysinh
* vUusinh
* cUusinh
* tRsinh
* oslashacute (U+01FF) [code: no-overlaps-bit]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Shapes languages in all GF glyphsets. (googlefonts/glyphsets/shape_languages)</summary>
    <div>








- ⚠️ **WARN** Warning language shaping:

| Message                                                           | Languages                    |
|-------------------------------------------------------------------|------------------------------|
| Auxiliary orthography codepoints:                                 | * fr_Latn (French)           |
|   The following auxiliary characters are missing from the font: Ǔ |                              |
|   The following auxiliary characters are missing from the font: ſ |                              |
|   The following auxiliary characters are missing from the font: ǔ |                              |
| Auxiliary orthography codepoints:                                 | * lt_Latn (Lithuanian)       |
|   Shaper didn't attach tildecomb to l when shaping the text 'l̃'   |                              |
| Auxiliary orthography codepoints:                                 | * nb_Latn (Norwegian Bokmål) |
|   The following auxiliary characters are missing from the font: Ǎ |                              |
|   The following auxiliary characters are missing from the font: ǎ |                              |
| Auxiliary orthography codepoints:                                 | * en_Latn (English)          |
|   The following auxiliary characters are missing from the font: ʻ |                              |
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
|   The following auxiliary characters are missing from the font: ǯ |                              |
| Auxiliary orthography codepoints:                                 | * nl_Latn (Dutch)            |
|   The following auxiliary characters are missing from the font: Ĳ |                              |
|   The following auxiliary characters are missing from the font: ĳ |                              |
| Auxiliary orthography codepoints:                                 | * de_Latn (German)           |
|   The following auxiliary characters are missing from the font: ſ |                              | [code: warning-language-shaping]
  
  

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

* į̄
* į̂
* į́
* į̌
* į̃
* į̀
* ị̄
* ị̂
* ị́
* ị̃
* ị̀The dot of soft dotted characters _should_ disappear in other cases, for example:

* į̒
* į̇
* į̋
* į̊
* į̉
* į̆
* į̈
* į̑
* į̏
* ị̒
* ị̇
* ị̋
* ị̊
* ị̉
* ị̆
* ị̌
* ị̈
* ị̑
* ị̏ [code: soft-dotted]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check the direction of the outermost contour in each glyph (outline_direction)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have a counter-clockwise outer contour:

* uni0D94 (U+0D94) has a path with no bounds (probably a single point)
* uni0D96 (U+0D96) has a path with no bounds (probably a single point)
* uni0D9E (U+0D9E) has a path with no bounds (probably a single point)
* ngsinh has a path with no bounds (probably a single point)
* ngIsinh has a path with no bounds (probably a single point)
* ngIisinh has a path with no bounds (probably a single point)
* ddIisinh has a path with no bounds (probably a single point)
* nnddIisinh has a path with no bounds (probably a single point)
* ddRIisinh has a path with no bounds (probably a single point)
* nga_rephasinh has a path with no bounds (probably a single point)
* Ccedilla (U+00C7) has a path with no bounds (probably a single point)
* Scedilla (U+015E) has a path with no bounds (probably a single point)
* uni0162 (U+0162) has a path with no bounds (probably a single point)
* ccedilla (U+00E7) has a path with no bounds (probably a single point)
* scedilla (U+015F) has a path with no bounds (probably a single point)
* uni0163 (U+0163) has a path with no bounds (probably a single point)
* nine (U+0039) has a path with no bounds (probably a single point)
* uni0327 (U+0327) has a path with no bounds (probably a single point)
* cedilla (U+00B8) has a path with no bounds (probably a single point) [code: ccw-outer-contour]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? (outline_jaggy_segments)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have jaggy segments:

* uni0D89 (U+0D89): Quad(QuadBez { p0: (509.5, 26.0), p1: (445.0, -22.0), p2: (333.0, -51.0) })/Quad(QuadBez { p0: (333.0, -51.0), p1: (346.0, -50.0), p2: (360.0, -48.5) }) = 10.117994603859108 degrees
* uni0D8A (U+0D8A): Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* uni0D91 (U+0D91): Quad(QuadBez { p0: (134.5, 210.0), p1: (165.0, 243.0), p2: (211.0, 262.0) })/Quad(QuadBez { p0: (211.0, 262.0), p1: (147.0, 248.0), p2: (99.5, 227.0) }) = 10.103666086968166 degrees
* uni0D92 (U+0D92): Quad(QuadBez { p0: (114.5, 210.0), p1: (145.0, 243.0), p2: (191.0, 262.0) })/Quad(QuadBez { p0: (191.0, 262.0), p1: (127.0, 248.0), p2: (79.5, 227.0) }) = 10.103666086968166 degrees
* uni0D93 (U+0D93): Quad(QuadBez { p0: (605.5, 210.0), p1: (636.0, 243.0), p2: (682.0, 262.0) })/Quad(QuadBez { p0: (682.0, 262.0), p1: (618.0, 248.0), p2: (570.5, 227.0) }) = 10.103666086968166 degrees
* uni0D9A (U+0D9A): Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* uni0DA0 (U+0DA0): Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* uni0DA1 (U+0DA1): Quad(QuadBez { p0: (243.0, 299.0), p1: (243.0, 299.0), p2: (244.0, 300.0) })/Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) = 0.0000012074182697257333 degrees
* uni0DA3 (U+0DA3): Quad(QuadBez { p0: (284.0, 306.0), p1: (244.0, 277.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 8.880659150520234 degrees
* uni0DA4 (U+0DA4): Quad(QuadBez { p0: (393.5, 289.0), p1: (377.0, 276.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (393.0, 286.0), p2: (424.5, 303.0) }) = 5.879652082133404 degrees
* uni0DA9 (U+0DA9): Quad(QuadBez { p0: (119.5, 233.5), p1: (146.0, 271.0), p2: (190.0, 291.0) })/Quad(QuadBez { p0: (190.0, 291.0), p1: (136.0, 276.0), p2: (102.5, 257.5) }) = 8.919843783662284 degrees
* uni0DA9 (U+0DA9): Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) })/Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) }) = 0.0000012074182697257333 degrees
* uni0DAA (U+0DAA): Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* uni0DAC (U+0DAC): Quad(QuadBez { p0: (240.5, 233.5), p1: (267.0, 271.0), p2: (311.0, 291.0) })/Quad(QuadBez { p0: (311.0, 291.0), p1: (257.0, 276.0), p2: (223.5, 257.5) }) = 8.919843783662284 degrees
* uni0DAC (U+0DAC): Quad(QuadBez { p0: (497.0, 97.0), p1: (496.0, 96.0), p2: (497.0, 97.0) })/Quad(QuadBez { p0: (497.0, 97.0), p1: (496.0, 96.0), p2: (497.0, 97.0) }) = 0.0000012074182697257333 degrees
* uni0DAD (U+0DAD): Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* uni0DAD (U+0DAD): Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* uni0DAD (U+0DAD): Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* uni0DB1 (U+0DB1): Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* uni0DB7 (U+0DB7): Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* uni0DBB (U+0DBB): Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* uni0DC2 (U+0DC2): Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* uni0DC3 (U+0DC3): Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSsasinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSsasinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVasinh: Quad(QuadBez { p0: (267.0, 286.0), p1: (249.0, 272.0), p2: (238.0, 261.0) })/Quad(QuadBez { p0: (238.0, 261.0), p1: (275.0, 288.0), p2: (325.5, 311.0) }) = 8.880659150520234 degrees
* tVasinh: Quad(QuadBez { p0: (73.0, 59.0), p1: (71.0, 55.0), p2: (70.0, 51.0) })/Quad(QuadBez { p0: (70.0, 51.0), p1: (70.0, 52.0), p2: (62.0, 56.5) }) = 14.036243467926484 degrees
* tVasinh: Quad(QuadBez { p0: (246.5, 278.0), p1: (232.0, 265.0), p2: (224.0, 257.0) })/Quad(QuadBez { p0: (224.0, 257.0), p1: (240.0, 269.0), p2: (254.5, 277.5) }) = 8.130102354156005 degrees
* tThasinh: Quad(QuadBez { p0: (85.0, 59.0), p1: (83.0, 55.0), p2: (82.0, 51.0) })/Quad(QuadBez { p0: (82.0, 51.0), p1: (82.0, 52.0), p2: (74.0, 56.5) }) = 14.036243467926484 degrees
* tThasinh: Quad(QuadBez { p0: (290.0, 374.0), p1: (281.0, 352.0), p2: (269.0, 333.0) })/Quad(QuadBez { p0: (269.0, 333.0), p1: (271.0, 335.0), p2: (273.0, 337.0) }) = 12.724355685422392 degrees
* tThasinh: Quad(QuadBez { p0: (258.5, 278.0), p1: (244.0, 265.0), p2: (236.0, 257.0) })/Quad(QuadBez { p0: (236.0, 257.0), p1: (252.0, 269.0), p2: (266.5, 277.5) }) = 8.130102354156005 degrees
* nDasinh: Quad(QuadBez { p0: (288.5, 281.5), p1: (280.0, 273.0), p2: (271.0, 264.0) })/Quad(QuadBez { p0: (271.0, 264.0), p1: (307.0, 290.0), p2: (344.0, 308.5) }) = 9.162347045721706 degrees
* nDhasinh: Quad(QuadBez { p0: (255.0, 265.5), p1: (245.0, 254.0), p2: (234.0, 242.0) })/Quad(QuadBez { p0: (234.0, 242.0), p1: (274.0, 272.0), p2: (315.0, 294.0) }) = 10.61965527615514 degrees
* nVasinh: Quad(QuadBez { p0: (285.0, 251.0), p1: (275.0, 240.0), p2: (265.0, 228.0) })/Quad(QuadBez { p0: (265.0, 228.0), p1: (305.0, 258.0), p2: (345.5, 280.0) }) = 13.324531261890755 degrees
* nThasinh: Quad(QuadBez { p0: (311.0, 282.0), p1: (310.0, 281.0), p2: (307.0, 279.0) })/Quad(QuadBez { p0: (307.0, 279.0), p1: (335.0, 295.0), p2: (361.5, 305.5) }) = 3.94518622903751 degrees
* ksinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* khsinh: Quad(QuadBez { p0: (176.5, 652.5), p1: (186.0, 674.0), p2: (194.0, 688.0) })/Line(Line { p0: (194.0, 688.0), p1: (189.0, 681.0) }) = 5.79279649503215 degrees
* csinh: Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* chsinh: Quad(QuadBez { p0: (233.0, 299.0), p1: (233.0, 299.0), p2: (234.0, 300.0) })/Line(Line { p0: (234.0, 300.0), p1: (233.0, 299.0) }) = 0.0000012074182697257333 degrees
* jhsinh: Quad(QuadBez { p0: (767.0, 666.0), p1: (764.0, 666.0), p2: (760.0, 664.0) })/Line(Line { p0: (760.0, 664.0), p1: (767.0, 666.0) }) = 10.61965527615514 degrees
* jhsinh: Line(Line { p0: (693.0, 648.0), p1: (717.0, 654.0) })/Quad(QuadBez { p0: (717.0, 654.0), p1: (703.0, 652.0), p2: (698.0, 650.0) }) = 5.906141113770435 degrees
* jhsinh: Quad(QuadBez { p0: (269.0, 286.0), p1: (251.0, 272.0), p2: (239.0, 261.0) })/Quad(QuadBez { p0: (239.0, 261.0), p1: (276.0, 288.0), p2: (327.0, 311.0) }) = 6.391106228521041 degrees
* nysinh: Quad(QuadBez { p0: (393.5, 289.0), p1: (377.0, 276.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (393.0, 286.0), p2: (424.5, 303.0) }) = 5.879652082133404 degrees
* ddsinh: Quad(QuadBez { p0: (119.5, 233.5), p1: (146.0, 271.0), p2: (190.0, 291.0) })/Quad(QuadBez { p0: (190.0, 291.0), p1: (136.0, 276.0), p2: (102.5, 257.5) }) = 8.919843783662284 degrees
* ddsinh: Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) })/Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) }) = 0.0000012074182697257333 degrees
* ddhsinh: Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* nnddsinh: Quad(QuadBez { p0: (250.5, 233.5), p1: (277.0, 271.0), p2: (321.0, 291.0) })/Quad(QuadBez { p0: (321.0, 291.0), p1: (267.0, 276.0), p2: (233.5, 257.5) }) = 8.919843783662284 degrees
* nnddsinh: Quad(QuadBez { p0: (507.0, 97.0), p1: (506.0, 96.0), p2: (507.0, 97.0) })/Quad(QuadBez { p0: (507.0, 97.0), p1: (506.0, 96.0), p2: (507.0, 97.0) }) = 0.0000012074182697257333 degrees
* tsinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* tsinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* tsinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* dhsinh: Quad(QuadBez { p0: (290.0, 666.0), p1: (287.0, 666.0), p2: (283.0, 664.0) })/Line(Line { p0: (283.0, 664.0), p1: (290.0, 666.0) }) = 10.61965527615514 degrees
* dhsinh: Line(Line { p0: (216.0, 648.0), p1: (240.0, 654.0) })/Quad(QuadBez { p0: (240.0, 654.0), p1: (226.0, 652.0), p2: (221.0, 650.0) }) = 5.906141113770435 degrees
* nsinh: Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* bsinh: Line(Line { p0: (222.0, 696.0), p1: (256.0, 705.0) })/Quad(QuadBez { p0: (256.0, 705.0), p1: (236.0, 702.0), p2: (229.0, 699.0) }) = 6.295714360407535 degrees
* bhsinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* msinh: Quad(QuadBez { p0: (292.0, 709.0), p1: (289.0, 709.0), p2: (286.0, 708.0) })/Line(Line { p0: (286.0, 708.0), p1: (292.0, 709.0) }) = 8.972626614896358 degrees
* msinh: Line(Line { p0: (286.0, 708.0), p1: (292.0, 709.0) })/Quad(QuadBez { p0: (292.0, 709.0), p1: (289.0, 709.0), p2: (286.0, 708.0) }) = 9.462322208025613 degrees
* msinh: Line(Line { p0: (218.0, 692.0), p1: (246.0, 698.0) })/Quad(QuadBez { p0: (246.0, 698.0), p1: (230.0, 696.0), p2: (224.0, 694.0) }) = 4.969740728110289 degrees
* mbsinh: Line(Line { p0: (218.0, 690.0), p1: (235.0, 694.0) })/Quad(QuadBez { p0: (235.0, 694.0), p1: (227.0, 693.0), p2: (222.5, 691.5) }) = 6.115503566285264 degrees
* rsinh: Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* vsinh: Quad(QuadBez { p0: (275.0, 719.0), p1: (272.0, 719.0), p2: (269.0, 718.0) })/Line(Line { p0: (269.0, 718.0), p1: (275.0, 719.0) }) = 8.972626614896358 degrees
* vsinh: Line(Line { p0: (269.0, 718.0), p1: (275.0, 719.0) })/Quad(QuadBez { p0: (275.0, 719.0), p1: (272.0, 719.0), p2: (269.0, 718.0) }) = 9.462322208025613 degrees
* vsinh: Line(Line { p0: (201.0, 702.0), p1: (229.0, 708.0) })/Quad(QuadBez { p0: (229.0, 708.0), p1: (213.0, 706.0), p2: (207.0, 704.0) }) = 4.969740728110289 degrees
* sssinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* ssinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSssinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSssinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVsinh: Quad(QuadBez { p0: (739.0, 719.0), p1: (736.0, 719.0), p2: (733.0, 718.0) })/Line(Line { p0: (733.0, 718.0), p1: (739.0, 719.0) }) = 8.972626614896358 degrees
* kVsinh: Line(Line { p0: (733.0, 718.0), p1: (739.0, 719.0) })/Quad(QuadBez { p0: (739.0, 719.0), p1: (736.0, 719.0), p2: (733.0, 718.0) }) = 9.462322208025613 degrees
* kVsinh: Line(Line { p0: (665.0, 702.0), p1: (693.0, 708.0) })/Quad(QuadBez { p0: (693.0, 708.0), p1: (677.0, 706.0), p2: (671.0, 704.0) }) = 4.969740728110289 degrees
* kVsinh: Quad(QuadBez { p0: (267.0, 286.0), p1: (249.0, 272.0), p2: (238.0, 261.0) })/Quad(QuadBez { p0: (238.0, 261.0), p1: (275.0, 288.0), p2: (325.5, 311.0) }) = 8.880659150520234 degrees
* tVsinh: Quad(QuadBez { p0: (120.0, 53.0), p1: (118.0, 49.0), p2: (117.0, 45.0) })/Quad(QuadBez { p0: (117.0, 45.0), p1: (117.0, 46.0), p2: (109.0, 51.0) }) = 14.036243467926484 degrees
* tVsinh: Quad(QuadBez { p0: (324.0, 368.0), p1: (314.0, 345.0), p2: (302.0, 325.0) })/Quad(QuadBez { p0: (302.0, 325.0), p1: (305.0, 328.0), p2: (308.0, 331.0) }) = 14.036243467926457 degrees
* tVsinh: Quad(QuadBez { p0: (760.0, 719.0), p1: (757.0, 719.0), p2: (754.0, 718.0) })/Line(Line { p0: (754.0, 718.0), p1: (760.0, 719.0) }) = 8.972626614896358 degrees
* tVsinh: Line(Line { p0: (754.0, 718.0), p1: (760.0, 719.0) })/Quad(QuadBez { p0: (760.0, 719.0), p1: (757.0, 719.0), p2: (754.0, 718.0) }) = 9.462322208025613 degrees
* tVsinh: Line(Line { p0: (686.0, 702.0), p1: (714.0, 708.0) })/Quad(QuadBez { p0: (714.0, 708.0), p1: (698.0, 706.0), p2: (692.0, 704.0) }) = 4.969740728110289 degrees
* tVsinh: Quad(QuadBez { p0: (293.5, 271.5), p1: (279.0, 258.0), p2: (271.0, 250.0) })/Quad(QuadBez { p0: (271.0, 250.0), p1: (287.0, 264.0), p2: (301.5, 272.5) }) = 3.814074834290474 degrees
* tThsinh: Quad(QuadBez { p0: (85.0, 59.0), p1: (83.0, 55.0), p2: (82.0, 51.0) })/Quad(QuadBez { p0: (82.0, 51.0), p1: (82.0, 52.0), p2: (74.0, 56.5) }) = 14.036243467926484 degrees
* tThsinh: Quad(QuadBez { p0: (290.0, 374.0), p1: (281.0, 352.0), p2: (269.0, 333.0) })/Quad(QuadBez { p0: (269.0, 333.0), p1: (271.0, 335.0), p2: (273.0, 337.0) }) = 12.724355685422392 degrees
* tThsinh: Quad(QuadBez { p0: (258.5, 278.0), p1: (244.0, 265.0), p2: (236.0, 257.0) })/Quad(QuadBez { p0: (236.0, 257.0), p1: (252.0, 269.0), p2: (266.5, 277.5) }) = 8.130102354156005 degrees
* nDsinh: Quad(QuadBez { p0: (288.5, 281.5), p1: (280.0, 273.0), p2: (271.0, 264.0) })/Quad(QuadBez { p0: (271.0, 264.0), p1: (307.0, 290.0), p2: (344.0, 308.5) }) = 9.162347045721706 degrees
* nDhsinh: Quad(QuadBez { p0: (723.0, 666.0), p1: (720.0, 666.0), p2: (716.0, 664.0) })/Line(Line { p0: (716.0, 664.0), p1: (723.0, 666.0) }) = 10.61965527615514 degrees
* nDhsinh: Line(Line { p0: (649.0, 648.0), p1: (673.0, 654.0) })/Quad(QuadBez { p0: (673.0, 654.0), p1: (659.0, 652.0), p2: (654.0, 650.0) }) = 5.906141113770435 degrees
* nDhsinh: Quad(QuadBez { p0: (276.0, 265.5), p1: (266.0, 254.0), p2: (255.0, 242.0) })/Quad(QuadBez { p0: (255.0, 242.0), p1: (295.0, 272.0), p2: (336.0, 294.0) }) = 10.61965527615514 degrees
* nVsinh: Quad(QuadBez { p0: (712.0, 719.0), p1: (709.0, 719.0), p2: (706.0, 718.0) })/Line(Line { p0: (706.0, 718.0), p1: (712.0, 719.0) }) = 8.972626614896358 degrees
* nVsinh: Line(Line { p0: (706.0, 718.0), p1: (712.0, 719.0) })/Quad(QuadBez { p0: (712.0, 719.0), p1: (709.0, 719.0), p2: (706.0, 718.0) }) = 9.462322208025613 degrees
* nVsinh: Line(Line { p0: (638.0, 702.0), p1: (666.0, 708.0) })/Quad(QuadBez { p0: (666.0, 708.0), p1: (650.0, 706.0), p2: (644.0, 704.0) }) = 4.969740728110289 degrees
* nVsinh: Quad(QuadBez { p0: (285.0, 251.0), p1: (275.0, 240.0), p2: (265.0, 228.0) })/Quad(QuadBez { p0: (265.0, 228.0), p1: (305.0, 258.0), p2: (345.5, 280.0) }) = 13.324531261890755 degrees
* nThsinh: Quad(QuadBez { p0: (288.0, 282.0), p1: (287.0, 281.0), p2: (284.0, 279.0) })/Quad(QuadBez { p0: (284.0, 279.0), p1: (312.0, 295.0), p2: (338.5, 305.5) }) = 3.94518622903751 degrees
* dVsinh: Quad(QuadBez { p0: (409.0, 719.0), p1: (406.0, 719.0), p2: (403.0, 718.0) })/Line(Line { p0: (403.0, 718.0), p1: (409.0, 719.0) }) = 8.972626614896358 degrees
* dVsinh: Line(Line { p0: (403.0, 718.0), p1: (409.0, 719.0) })/Quad(QuadBez { p0: (409.0, 719.0), p1: (406.0, 719.0), p2: (403.0, 718.0) }) = 9.462322208025613 degrees
* dVsinh: Line(Line { p0: (335.0, 702.0), p1: (363.0, 708.0) })/Quad(QuadBez { p0: (363.0, 708.0), p1: (347.0, 706.0), p2: (341.0, 704.0) }) = 4.969740728110289 degrees
* kIsinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* cIsinh: Quad(QuadBez { p0: (116.5, 220.0), p1: (140.0, 248.0), p2: (173.0, 265.0) })/Quad(QuadBez { p0: (173.0, 265.0), p1: (124.0, 251.0), p2: (88.0, 235.5) }) = 11.309932474020227 degrees
* chIsinh: Quad(QuadBez { p0: (243.0, 299.0), p1: (243.0, 299.0), p2: (244.0, 300.0) })/Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) = 0.0000012074182697257333 degrees
* jhIsinh: Quad(QuadBez { p0: (258.0, 286.0), p1: (240.0, 272.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 6.391106228521041 degrees
* nyIsinh: Quad(QuadBez { p0: (393.5, 289.0), p1: (377.0, 276.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (393.0, 286.0), p2: (424.5, 303.0) }) = 5.879652082133404 degrees
* ddIsinh: Quad(QuadBez { p0: (155.5, 226.5), p1: (183.0, 244.0), p2: (215.0, 255.0) })/Quad(QuadBez { p0: (215.0, 255.0), p1: (153.0, 240.0), p2: (107.0, 219.5) }) = 5.36986529182775 degrees
* ddIsinh: Quad(QuadBez { p0: (377.0, 97.0), p1: (376.0, 96.0), p2: (377.0, 97.0) })/Quad(QuadBez { p0: (377.0, 97.0), p1: (376.0, 96.0), p2: (377.0, 97.0) }) = 0.0000012074182697257333 degrees
* ddhIsinh: Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* nnddIsinh: Quad(QuadBez { p0: (280.5, 226.5), p1: (308.0, 244.0), p2: (340.0, 255.0) })/Quad(QuadBez { p0: (340.0, 255.0), p1: (278.0, 240.0), p2: (232.0, 219.5) }) = 5.36986529182775 degrees
* nnddIsinh: Quad(QuadBez { p0: (502.0, 97.0), p1: (501.0, 96.0), p2: (502.0, 97.0) })/Quad(QuadBez { p0: (502.0, 97.0), p1: (501.0, 96.0), p2: (502.0, 97.0) }) = 0.0000012074182697257333 degrees
* tIsinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* tIsinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* tIsinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* nIsinh: Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* bhIsinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* rIsinh: Quad(QuadBez { p0: (230.5, 424.5), p1: (192.0, 399.0), p2: (167.0, 375.0) })/Quad(QuadBez { p0: (167.0, 375.0), p1: (194.0, 400.0), p2: (240.0, 424.0) }) = 1.0334588338586708 degrees
* ssIsinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sIsinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSsIsinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSsIsinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVIsinh: Quad(QuadBez { p0: (296.0, 265.0), p1: (278.0, 251.0), p2: (267.0, 240.0) })/Quad(QuadBez { p0: (267.0, 240.0), p1: (304.0, 267.0), p2: (354.5, 290.0) }) = 8.880659150520234 degrees
* tVIsinh: Quad(QuadBez { p0: (73.0, 59.0), p1: (71.0, 55.0), p2: (70.0, 51.0) })/Quad(QuadBez { p0: (70.0, 51.0), p1: (70.0, 52.0), p2: (62.0, 56.5) }) = 14.036243467926484 degrees
* tVIsinh: Quad(QuadBez { p0: (277.5, 374.0), p1: (268.0, 352.0), p2: (256.0, 332.0) })/Quad(QuadBez { p0: (256.0, 332.0), p1: (258.0, 335.0), p2: (261.0, 337.0) }) = 2.7263109939063455 degrees
* tVIsinh: Quad(QuadBez { p0: (246.5, 278.0), p1: (232.0, 265.0), p2: (224.0, 257.0) })/Quad(QuadBez { p0: (224.0, 257.0), p1: (240.0, 269.0), p2: (254.5, 277.5) }) = 8.130102354156005 degrees
* tThIsinh: Quad(QuadBez { p0: (85.0, 59.0), p1: (83.0, 55.0), p2: (82.0, 51.0) })/Quad(QuadBez { p0: (82.0, 51.0), p1: (82.0, 52.0), p2: (74.0, 56.5) }) = 14.036243467926484 degrees
* tThIsinh: Quad(QuadBez { p0: (290.0, 374.0), p1: (281.0, 352.0), p2: (269.0, 333.0) })/Quad(QuadBez { p0: (269.0, 333.0), p1: (271.0, 335.0), p2: (273.0, 337.0) }) = 12.724355685422392 degrees
* tThIsinh: Quad(QuadBez { p0: (258.5, 278.0), p1: (244.0, 265.0), p2: (236.0, 257.0) })/Quad(QuadBez { p0: (236.0, 257.0), p1: (252.0, 269.0), p2: (266.5, 277.5) }) = 8.130102354156005 degrees
* nDIsinh: Quad(QuadBez { p0: (288.5, 281.5), p1: (280.0, 273.0), p2: (271.0, 264.0) })/Quad(QuadBez { p0: (271.0, 264.0), p1: (307.0, 290.0), p2: (344.0, 308.5) }) = 9.162347045721706 degrees
* nDhIsinh: Quad(QuadBez { p0: (285.0, 265.5), p1: (275.0, 254.0), p2: (264.0, 242.0) })/Quad(QuadBez { p0: (264.0, 242.0), p1: (304.0, 272.0), p2: (345.0, 294.0) }) = 10.61965527615514 degrees
* nVIsinh: Quad(QuadBez { p0: (285.0, 251.0), p1: (275.0, 240.0), p2: (265.0, 228.0) })/Quad(QuadBez { p0: (265.0, 228.0), p1: (305.0, 258.0), p2: (345.5, 280.0) }) = 13.324531261890755 degrees
* nThIsinh: Quad(QuadBez { p0: (311.0, 282.0), p1: (310.0, 281.0), p2: (307.0, 279.0) })/Quad(QuadBez { p0: (307.0, 279.0), p1: (335.0, 295.0), p2: (361.5, 305.5) }) = 3.94518622903751 degrees
* kIisinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* cIisinh: Quad(QuadBez { p0: (146.0, 215.0), p1: (174.0, 247.0), p2: (211.0, 265.0) })/Quad(QuadBez { p0: (211.0, 265.0), p1: (158.0, 251.0), p2: (118.0, 234.5) }) = 11.145533244814345 degrees
* chIisinh: Quad(QuadBez { p0: (223.0, 299.0), p1: (223.0, 299.0), p2: (224.0, 300.0) })/Line(Line { p0: (224.0, 300.0), p1: (223.0, 299.0) }) = 0.0000012074182697257333 degrees
* jhIisinh: Quad(QuadBez { p0: (258.0, 286.0), p1: (240.0, 272.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 6.391106228521041 degrees
* nyIisinh: Quad(QuadBez { p0: (393.5, 289.0), p1: (377.0, 276.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (393.0, 286.0), p2: (424.5, 303.0) }) = 5.879652082133404 degrees
* ddIisinh: Quad(QuadBez { p0: (198.0, 232.0), p1: (238.0, 249.0), p2: (277.0, 260.0) })/Quad(QuadBez { p0: (277.0, 260.0), p1: (200.0, 247.0), p2: (142.5, 222.5) }) = 6.168228939920581 degrees
* ddhIisinh: Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* nnddIisinh: Quad(QuadBez { p0: (322.0, 232.0), p1: (362.0, 249.0), p2: (401.0, 260.0) })/Quad(QuadBez { p0: (401.0, 260.0), p1: (324.0, 247.0), p2: (266.5, 222.5) }) = 6.168228939920581 degrees
* tIisinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* tIisinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* tIisinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* nIisinh: Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* bIisinh: Line(Line { p0: (499.0, 617.0), p1: (511.0, 611.0) })/Quad(QuadBez { p0: (511.0, 611.0), p1: (505.0, 614.0), p2: (499.0, 617.0) }) = 0.0000008537736462515939 degrees
* bIisinh: Quad(QuadBez { p0: (511.0, 611.0), p1: (505.0, 614.0), p2: (499.0, 617.0) })/Line(Line { p0: (499.0, 617.0), p1: (511.0, 611.0) }) = 0.0000008537736462515939 degrees
* bhIisinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* rIisinh: Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* ssIisinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sIisinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSsIisinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSsIisinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVIisinh: Quad(QuadBez { p0: (296.0, 265.0), p1: (278.0, 251.0), p2: (267.0, 240.0) })/Quad(QuadBez { p0: (267.0, 240.0), p1: (304.0, 267.0), p2: (354.5, 290.0) }) = 8.880659150520234 degrees
* tVIisinh: Quad(QuadBez { p0: (80.0, 59.0), p1: (78.0, 55.0), p2: (77.0, 51.0) })/Quad(QuadBez { p0: (77.0, 51.0), p1: (77.0, 52.0), p2: (69.0, 56.5) }) = 14.036243467926484 degrees
* tVIisinh: Quad(QuadBez { p0: (284.5, 374.0), p1: (275.0, 352.0), p2: (263.0, 332.0) })/Quad(QuadBez { p0: (263.0, 332.0), p1: (265.0, 335.0), p2: (268.0, 337.0) }) = 2.7263109939063455 degrees
* tVIisinh: Quad(QuadBez { p0: (253.5, 278.0), p1: (239.0, 265.0), p2: (231.0, 257.0) })/Quad(QuadBez { p0: (231.0, 257.0), p1: (247.0, 269.0), p2: (261.5, 278.0) }) = 8.130102354156005 degrees
* tThIisinh: Quad(QuadBez { p0: (85.0, 59.0), p1: (83.0, 55.0), p2: (82.0, 51.0) })/Quad(QuadBez { p0: (82.0, 51.0), p1: (82.0, 52.0), p2: (74.0, 56.5) }) = 14.036243467926484 degrees
* tThIisinh: Quad(QuadBez { p0: (290.0, 374.0), p1: (281.0, 352.0), p2: (269.0, 333.0) })/Quad(QuadBez { p0: (269.0, 333.0), p1: (271.0, 335.0), p2: (273.0, 337.0) }) = 12.724355685422392 degrees
* tThIisinh: Quad(QuadBez { p0: (258.5, 278.0), p1: (244.0, 265.0), p2: (236.0, 257.0) })/Quad(QuadBez { p0: (236.0, 257.0), p1: (252.0, 269.0), p2: (266.5, 277.5) }) = 8.130102354156005 degrees
* nDIisinh: Quad(QuadBez { p0: (288.5, 281.5), p1: (280.0, 273.0), p2: (271.0, 264.0) })/Quad(QuadBez { p0: (271.0, 264.0), p1: (307.0, 290.0), p2: (344.0, 308.5) }) = 9.162347045721706 degrees
* nDhIisinh: Quad(QuadBez { p0: (285.0, 265.5), p1: (275.0, 254.0), p2: (264.0, 242.0) })/Quad(QuadBez { p0: (264.0, 242.0), p1: (304.0, 272.0), p2: (345.0, 294.0) }) = 10.61965527615514 degrees
* nVIisinh: Quad(QuadBez { p0: (285.5, 249.5), p1: (276.0, 239.0), p2: (266.0, 227.0) })/Quad(QuadBez { p0: (266.0, 227.0), p1: (305.0, 257.0), p2: (346.0, 278.5) }) = 12.625836878907304 degrees
* nThIisinh: Quad(QuadBez { p0: (311.0, 282.0), p1: (310.0, 281.0), p2: (307.0, 279.0) })/Quad(QuadBez { p0: (307.0, 279.0), p1: (335.0, 295.0), p2: (361.5, 305.5) }) = 3.94518622903751 degrees
* kUsinh: Quad(QuadBez { p0: (261.5, 288.5), p1: (246.0, 276.0), p2: (237.0, 268.0) })/Quad(QuadBez { p0: (237.0, 268.0), p1: (262.0, 285.0), p2: (292.5, 301.5) }) = 7.417837204132778 degrees
* cUsinh: Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* chUsinh: Quad(QuadBez { p0: (243.0, 299.0), p1: (243.0, 299.0), p2: (244.0, 300.0) })/Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) = 0.0000012074182697257333 degrees
* jhUsinh: Quad(QuadBez { p0: (284.0, 306.0), p1: (244.0, 277.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 8.880659150520234 degrees
* nyUsinh: Quad(QuadBez { p0: (393.5, 289.0), p1: (377.0, 276.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (393.0, 286.0), p2: (424.5, 303.0) }) = 5.879652082133404 degrees
* ddUsinh: Quad(QuadBez { p0: (98.5, 233.5), p1: (125.0, 271.0), p2: (169.0, 291.0) })/Quad(QuadBez { p0: (169.0, 291.0), p1: (115.0, 276.0), p2: (81.5, 257.5) }) = 8.919843783662284 degrees
* ddUsinh: Quad(QuadBez { p0: (355.0, 97.0), p1: (354.0, 96.0), p2: (355.0, 97.0) })/Quad(QuadBez { p0: (355.0, 97.0), p1: (354.0, 96.0), p2: (355.0, 97.0) }) = 0.0000012074182697257333 degrees
* ddhUsinh: Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* nnddUsinh: Quad(QuadBez { p0: (244.5, 233.5), p1: (271.0, 271.0), p2: (315.0, 291.0) })/Quad(QuadBez { p0: (315.0, 291.0), p1: (261.0, 276.0), p2: (227.5, 257.5) }) = 8.919843783662284 degrees
* nnddUsinh: Quad(QuadBez { p0: (501.0, 97.0), p1: (500.0, 96.0), p2: (501.0, 97.0) })/Quad(QuadBez { p0: (501.0, 97.0), p1: (500.0, 96.0), p2: (501.0, 97.0) }) = 0.0000012074182697257333 degrees
* tUsinh: Quad(QuadBez { p0: (62.0, 70.0), p1: (60.0, 66.0), p2: (59.0, 62.0) })/Quad(QuadBez { p0: (59.0, 62.0), p1: (59.0, 63.0), p2: (51.0, 67.5) }) = 14.036243467926484 degrees
* tUsinh: Quad(QuadBez { p0: (264.5, 381.0), p1: (255.0, 359.0), p2: (243.0, 339.0) })/Quad(QuadBez { p0: (243.0, 339.0), p1: (245.0, 342.0), p2: (248.0, 344.0) }) = 2.7263109939063455 degrees
* tUsinh: Quad(QuadBez { p0: (230.5, 282.0), p1: (219.0, 272.0), p2: (211.0, 263.0) })/Quad(QuadBez { p0: (211.0, 263.0), p1: (219.0, 270.0), p2: (223.0, 273.0) }) = 7.180535497720157 degrees
* nUsinh: Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* rUsinh: Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* ssUsinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sUsinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSsUsinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSsUsinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVUsinh: Quad(QuadBez { p0: (296.5, 285.0), p1: (279.0, 272.0), p2: (268.0, 260.0) })/Quad(QuadBez { p0: (268.0, 260.0), p1: (305.0, 287.0), p2: (355.0, 309.5) }) = 11.370212072519372 degrees
* tVUsinh: Quad(QuadBez { p0: (80.0, 67.0), p1: (78.0, 64.0), p2: (77.0, 60.0) })/Quad(QuadBez { p0: (77.0, 60.0), p1: (77.0, 61.0), p2: (69.0, 65.5) }) = 14.036243467926484 degrees
* tVUsinh: Quad(QuadBez { p0: (253.5, 285.5), p1: (239.0, 272.0), p2: (231.0, 264.0) })/Quad(QuadBez { p0: (231.0, 264.0), p1: (247.0, 278.0), p2: (261.5, 286.5) }) = 3.814074834290474 degrees
* tThUsinh: Quad(QuadBez { p0: (85.0, 67.0), p1: (83.0, 63.0), p2: (82.0, 59.0) })/Quad(QuadBez { p0: (82.0, 59.0), p1: (82.0, 60.0), p2: (74.0, 64.5) }) = 14.036243467926484 degrees
* tThUsinh: Quad(QuadBez { p0: (289.0, 380.5), p1: (279.0, 358.0), p2: (267.0, 338.0) })/Quad(QuadBez { p0: (267.0, 338.0), p1: (270.0, 341.0), p2: (273.0, 344.0) }) = 14.036243467926457 degrees
* tThUsinh: Quad(QuadBez { p0: (258.5, 285.5), p1: (244.0, 272.0), p2: (236.0, 264.0) })/Quad(QuadBez { p0: (236.0, 264.0), p1: (252.0, 277.0), p2: (266.5, 286.0) }) = 5.906141113770558 degrees
* nDUsinh: Quad(QuadBez { p0: (285.0, 259.0), p1: (275.0, 248.0), p2: (265.0, 236.0) })/Quad(QuadBez { p0: (265.0, 236.0), p1: (304.0, 266.0), p2: (345.0, 288.0) }) = 12.625836878907304 degrees
* nDhUsinh: Quad(QuadBez { p0: (260.0, 265.5), p1: (250.0, 254.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (279.0, 272.0), p2: (320.0, 294.0) }) = 10.61965527615514 degrees
* nVUsinh: Line(Line { p0: (506.0, 147.0), p1: (506.0, 149.0) })/Quad(QuadBez { p0: (506.0, 149.0), p1: (488.0, 73.0), p2: (424.5, 30.5) }) = 13.324531261890783 degrees
* nVUsinh: Quad(QuadBez { p0: (274.0, 267.5), p1: (264.0, 256.0), p2: (254.0, 244.0) })/Quad(QuadBez { p0: (254.0, 244.0), p1: (294.0, 274.0), p2: (335.0, 296.5) }) = 13.324531261890755 degrees
* nThUsinh: Quad(QuadBez { p0: (335.5, 397.5), p1: (330.0, 381.0), p2: (321.0, 365.0) })/Quad(QuadBez { p0: (321.0, 365.0), p1: (350.0, 396.0), p2: (383.0, 424.0) }) = 13.733094024212365 degrees
* nThUsinh: Quad(QuadBez { p0: (312.0, 291.0), p1: (310.0, 289.0), p2: (306.0, 285.0) })/Quad(QuadBez { p0: (306.0, 285.0), p1: (334.0, 303.0), p2: (361.5, 314.0) }) = 12.26477372789243 degrees
* kUusinh: Quad(QuadBez { p0: (263.0, 291.0), p1: (248.0, 279.0), p2: (239.0, 271.0) })/Quad(QuadBez { p0: (239.0, 271.0), p1: (276.0, 297.0), p2: (325.0, 319.5) }) = 6.537722549544118 degrees
* cUusinh: Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* chUusinh: Quad(QuadBez { p0: (253.0, 299.0), p1: (253.0, 299.0), p2: (254.0, 300.0) })/Line(Line { p0: (254.0, 300.0), p1: (253.0, 299.0) }) = 0.0000012074182697257333 degrees
* jhUusinh: Quad(QuadBez { p0: (284.0, 306.0), p1: (244.0, 277.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 8.880659150520234 degrees
* nyUusinh: Quad(QuadBez { p0: (399.0, 292.5), p1: (385.0, 281.0), p2: (375.0, 273.0) })/Quad(QuadBez { p0: (375.0, 273.0), p1: (412.0, 299.0), p2: (461.0, 321.0) }) = 3.563991467063924 degrees
* ddUusinh: Quad(QuadBez { p0: (119.5, 233.5), p1: (146.0, 271.0), p2: (190.0, 291.0) })/Quad(QuadBez { p0: (190.0, 291.0), p1: (136.0, 276.0), p2: (102.5, 257.5) }) = 8.919843783662284 degrees
* ddUusinh: Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) })/Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) }) = 0.0000012074182697257333 degrees
* ddhUusinh: Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* nnddUusinh: Quad(QuadBez { p0: (250.5, 233.5), p1: (277.0, 271.0), p2: (321.0, 291.0) })/Quad(QuadBez { p0: (321.0, 291.0), p1: (267.0, 276.0), p2: (233.5, 257.5) }) = 8.919843783662284 degrees
* nnddUusinh: Quad(QuadBez { p0: (507.0, 97.0), p1: (506.0, 96.0), p2: (507.0, 97.0) })/Quad(QuadBez { p0: (507.0, 97.0), p1: (506.0, 96.0), p2: (507.0, 97.0) }) = 0.0000012074182697257333 degrees
* tUusinh: Quad(QuadBez { p0: (62.0, 72.0), p1: (60.0, 68.0), p2: (59.0, 64.0) })/Quad(QuadBez { p0: (59.0, 64.0), p1: (59.0, 65.0), p2: (51.0, 69.5) }) = 14.036243467926484 degrees
* tUusinh: Quad(QuadBez { p0: (264.5, 381.5), p1: (255.0, 359.0), p2: (243.0, 340.0) })/Quad(QuadBez { p0: (243.0, 340.0), p1: (245.0, 342.0), p2: (248.0, 345.0) }) = 12.724355685422392 degrees
* tUusinh: Quad(QuadBez { p0: (258.0, 306.0), p1: (226.0, 281.0), p2: (211.0, 264.0) })/Quad(QuadBez { p0: (211.0, 264.0), p1: (219.0, 271.0), p2: (223.0, 274.0) }) = 7.390409209287791 degrees
* nUusinh: Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* rUusinh: Quad(QuadBez { p0: (216.5, 424.5), p1: (178.0, 399.0), p2: (153.0, 375.0) })/Quad(QuadBez { p0: (153.0, 375.0), p1: (180.0, 400.0), p2: (226.0, 424.0) }) = 1.0334588338586708 degrees
* ssUusinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sUusinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSsUusinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSsUusinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVUusinh: Quad(QuadBez { p0: (297.0, 291.5), p1: (280.0, 278.0), p2: (269.0, 267.0) })/Quad(QuadBez { p0: (269.0, 267.0), p1: (305.0, 294.0), p2: (355.5, 316.0) }) = 8.13010235415596 degrees
* tVUusinh: Quad(QuadBez { p0: (80.0, 68.0), p1: (78.0, 64.0), p2: (77.0, 60.0) })/Quad(QuadBez { p0: (77.0, 60.0), p1: (77.0, 61.0), p2: (69.0, 65.5) }) = 14.036243467926484 degrees
* tVUusinh: Quad(QuadBez { p0: (253.5, 286.5), p1: (239.0, 273.0), p2: (231.0, 265.0) })/Quad(QuadBez { p0: (231.0, 265.0), p1: (247.0, 278.0), p2: (261.5, 286.5) }) = 5.906141113770558 degrees
* tThUusinh: Quad(QuadBez { p0: (85.0, 68.0), p1: (83.0, 64.0), p2: (82.0, 60.0) })/Quad(QuadBez { p0: (82.0, 60.0), p1: (82.0, 61.0), p2: (74.0, 65.5) }) = 14.036243467926484 degrees
* tThUusinh: Quad(QuadBez { p0: (290.0, 383.0), p1: (281.0, 361.0), p2: (269.0, 342.0) })/Quad(QuadBez { p0: (269.0, 342.0), p1: (271.0, 344.0), p2: (273.0, 346.0) }) = 12.724355685422392 degrees
* tThUusinh: Quad(QuadBez { p0: (258.5, 286.5), p1: (244.0, 273.0), p2: (236.0, 265.0) })/Quad(QuadBez { p0: (236.0, 265.0), p1: (252.0, 278.0), p2: (266.5, 286.5) }) = 5.906141113770558 degrees
* nDUusinh: Quad(QuadBez { p0: (285.0, 274.5), p1: (275.0, 263.0), p2: (264.0, 251.0) })/Quad(QuadBez { p0: (264.0, 251.0), p1: (304.0, 281.0), p2: (345.0, 303.0) }) = 10.61965527615514 degrees
* nDhUusinh: Quad(QuadBez { p0: (255.0, 265.5), p1: (245.0, 254.0), p2: (234.0, 242.0) })/Quad(QuadBez { p0: (234.0, 242.0), p1: (274.0, 272.0), p2: (315.0, 294.0) }) = 10.61965527615514 degrees
* nVUusinh: Quad(QuadBez { p0: (285.0, 274.5), p1: (275.0, 263.0), p2: (264.0, 251.0) })/Quad(QuadBez { p0: (264.0, 251.0), p1: (304.0, 281.0), p2: (345.0, 303.0) }) = 10.61965527615514 degrees
* nThUusinh: Quad(QuadBez { p0: (311.0, 291.0), p1: (310.0, 290.0), p2: (307.0, 288.0) })/Quad(QuadBez { p0: (307.0, 288.0), p1: (335.0, 304.0), p2: (361.5, 314.5) }) = 3.94518622903751 degrees
* rAesinh: Quad(QuadBez { p0: (199.5, 434.0), p1: (152.0, 404.0), p2: (123.0, 375.0) })/Quad(QuadBez { p0: (123.0, 375.0), p1: (150.0, 400.0), p2: (196.0, 424.0) }) = 2.2025981617654704 degrees
* rAaesinh: Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* kRasinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* cRasinh: Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* jhRasinh: Quad(QuadBez { p0: (284.0, 306.0), p1: (244.0, 277.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 8.880659150520234 degrees
* nyRasinh: Quad(QuadBez { p0: (398.0, 293.5), p1: (378.0, 278.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (392.0, 286.0), p2: (424.0, 303.0) }) = 8.130102354156005 degrees
* ddRasinh: Quad(QuadBez { p0: (119.5, 233.5), p1: (146.0, 271.0), p2: (190.0, 291.0) })/Quad(QuadBez { p0: (190.0, 291.0), p1: (136.0, 276.0), p2: (102.5, 257.5) }) = 8.919843783662284 degrees
* ddRasinh: Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) })/Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) }) = 0.0000012074182697257333 degrees
* tRasinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* tRasinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* tRasinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* bhRasinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* ssRasinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sRasinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* nDRasinh: Quad(QuadBez { p0: (284.0, 274.5), p1: (274.0, 263.0), p2: (264.0, 251.0) })/Quad(QuadBez { p0: (264.0, 251.0), p1: (304.0, 282.0), p2: (345.0, 304.5) }) = 12.418744601780118 degrees
* khRsinh: Quad(QuadBez { p0: (176.5, 652.5), p1: (186.0, 674.0), p2: (194.0, 688.0) })/Line(Line { p0: (194.0, 688.0), p1: (189.0, 681.0) }) = 5.79279649503215 degrees
* cRsinh: Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* jhRsinh: Quad(QuadBez { p0: (767.0, 666.0), p1: (764.0, 666.0), p2: (760.0, 664.0) })/Line(Line { p0: (760.0, 664.0), p1: (767.0, 666.0) }) = 10.61965527615514 degrees
* jhRsinh: Line(Line { p0: (693.0, 648.0), p1: (717.0, 654.0) })/Quad(QuadBez { p0: (717.0, 654.0), p1: (703.0, 652.0), p2: (698.0, 650.0) }) = 5.906141113770435 degrees
* jhRsinh: Quad(QuadBez { p0: (269.0, 286.0), p1: (251.0, 272.0), p2: (239.0, 261.0) })/Quad(QuadBez { p0: (239.0, 261.0), p1: (276.0, 288.0), p2: (327.0, 311.0) }) = 6.391106228521041 degrees
* nyRsinh: Quad(QuadBez { p0: (400.0, 294.5), p1: (381.0, 280.0), p2: (370.0, 269.0) })/Quad(QuadBez { p0: (370.0, 269.0), p1: (407.0, 296.0), p2: (458.5, 319.5) }) = 8.880659150520234 degrees
* ddRsinh: Quad(QuadBez { p0: (119.5, 233.5), p1: (146.0, 271.0), p2: (190.0, 291.0) })/Quad(QuadBez { p0: (190.0, 291.0), p1: (136.0, 276.0), p2: (102.5, 257.5) }) = 8.919843783662284 degrees
* ddRsinh: Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) })/Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) }) = 0.0000012074182697257333 degrees
* tRsinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* tRsinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* tRsinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* dhRsinh: Quad(QuadBez { p0: (290.0, 666.0), p1: (287.0, 666.0), p2: (283.0, 664.0) })/Line(Line { p0: (283.0, 664.0), p1: (290.0, 666.0) }) = 10.61965527615514 degrees
* dhRsinh: Line(Line { p0: (216.0, 648.0), p1: (240.0, 654.0) })/Quad(QuadBez { p0: (240.0, 654.0), p1: (226.0, 652.0), p2: (221.0, 650.0) }) = 5.906141113770435 degrees
* bRsinh: Line(Line { p0: (222.0, 696.0), p1: (256.0, 705.0) })/Quad(QuadBez { p0: (256.0, 705.0), p1: (236.0, 702.0), p2: (229.0, 699.0) }) = 6.295714360407535 degrees
* bhRsinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* mRsinh: Quad(QuadBez { p0: (292.0, 709.0), p1: (289.0, 709.0), p2: (286.0, 708.0) })/Line(Line { p0: (286.0, 708.0), p1: (292.0, 709.0) }) = 8.972626614896358 degrees
* mRsinh: Line(Line { p0: (286.0, 708.0), p1: (292.0, 709.0) })/Quad(QuadBez { p0: (292.0, 709.0), p1: (289.0, 709.0), p2: (286.0, 708.0) }) = 9.462322208025613 degrees
* mRsinh: Line(Line { p0: (218.0, 692.0), p1: (246.0, 698.0) })/Quad(QuadBez { p0: (246.0, 698.0), p1: (230.0, 696.0), p2: (224.0, 694.0) }) = 4.969740728110289 degrees
* vRsinh: Quad(QuadBez { p0: (275.0, 719.0), p1: (272.0, 719.0), p2: (269.0, 718.0) })/Line(Line { p0: (269.0, 718.0), p1: (275.0, 719.0) }) = 8.972626614896358 degrees
* vRsinh: Line(Line { p0: (269.0, 718.0), p1: (275.0, 719.0) })/Quad(QuadBez { p0: (275.0, 719.0), p1: (272.0, 719.0), p2: (269.0, 718.0) }) = 9.462322208025613 degrees
* vRsinh: Line(Line { p0: (201.0, 702.0), p1: (229.0, 708.0) })/Quad(QuadBez { p0: (229.0, 708.0), p1: (213.0, 706.0), p2: (207.0, 704.0) }) = 4.969740728110289 degrees
* ssRsinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sRsinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kRIsinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* cRIsinh: Quad(QuadBez { p0: (116.5, 220.0), p1: (140.0, 248.0), p2: (173.0, 265.0) })/Quad(QuadBez { p0: (173.0, 265.0), p1: (124.0, 251.0), p2: (88.0, 235.5) }) = 11.309932474020227 degrees
* jhRIsinh: Quad(QuadBez { p0: (258.0, 286.0), p1: (240.0, 272.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 6.391106228521041 degrees
* nyRIsinh: Quad(QuadBez { p0: (398.0, 293.5), p1: (378.0, 278.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (392.0, 286.0), p2: (424.0, 303.0) }) = 8.130102354156005 degrees
* ddRIsinh: Quad(QuadBez { p0: (155.5, 226.5), p1: (183.0, 244.0), p2: (215.0, 255.0) })/Quad(QuadBez { p0: (215.0, 255.0), p1: (153.0, 240.0), p2: (107.0, 219.5) }) = 5.36986529182775 degrees
* ddRIsinh: Quad(QuadBez { p0: (377.0, 97.0), p1: (376.0, 96.0), p2: (377.0, 97.0) })/Quad(QuadBez { p0: (377.0, 97.0), p1: (376.0, 96.0), p2: (377.0, 97.0) }) = 0.0000012074182697257333 degrees
* tRIsinh: Quad(QuadBez { p0: (74.0, 62.0), p1: (72.0, 59.0), p2: (71.0, 55.0) })/Quad(QuadBez { p0: (71.0, 55.0), p1: (71.0, 56.0), p2: (63.0, 60.5) }) = 14.036243467926484 degrees
* tRIsinh: Quad(QuadBez { p0: (276.5, 372.5), p1: (267.0, 350.0), p2: (255.0, 331.0) })/Quad(QuadBez { p0: (255.0, 331.0), p1: (257.0, 333.0), p2: (260.0, 336.0) }) = 12.724355685422392 degrees
* tRIsinh: Quad(QuadBez { p0: (270.0, 297.0), p1: (239.0, 273.0), p2: (223.0, 256.0) })/Quad(QuadBez { p0: (223.0, 256.0), p1: (231.0, 263.0), p2: (235.0, 265.5) }) = 5.549779423218771 degrees
* bhRIsinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* ssRIsinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sRIsinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* nDRIsinh: Quad(QuadBez { p0: (284.0, 274.5), p1: (274.0, 263.0), p2: (264.0, 251.0) })/Quad(QuadBez { p0: (264.0, 251.0), p1: (304.0, 282.0), p2: (345.0, 304.5) }) = 12.418744601780118 degrees
* kRIisinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* cRIisinh: Quad(QuadBez { p0: (146.0, 215.0), p1: (174.0, 247.0), p2: (211.0, 265.0) })/Quad(QuadBez { p0: (211.0, 265.0), p1: (158.0, 251.0), p2: (118.0, 234.5) }) = 11.145533244814345 degrees
* jhRIisinh: Quad(QuadBez { p0: (258.0, 286.0), p1: (240.0, 272.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 6.391106228521041 degrees
* nyRIisinh: Quad(QuadBez { p0: (434.0, 293.5), p1: (414.0, 278.0), p2: (404.0, 268.0) })/Quad(QuadBez { p0: (404.0, 268.0), p1: (428.0, 286.0), p2: (460.0, 303.0) }) = 8.130102354156005 degrees
* ddRIisinh: Quad(QuadBez { p0: (198.0, 232.0), p1: (238.0, 249.0), p2: (277.0, 260.0) })/Quad(QuadBez { p0: (277.0, 260.0), p1: (200.0, 247.0), p2: (142.5, 222.5) }) = 6.168228939920581 degrees
* tRIisinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* tRIisinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* tRIisinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* bRIisinh: Line(Line { p0: (499.0, 617.0), p1: (511.0, 611.0) })/Quad(QuadBez { p0: (511.0, 611.0), p1: (505.0, 614.0), p2: (499.0, 617.0) }) = 0.0000008537736462515939 degrees
* bRIisinh: Quad(QuadBez { p0: (511.0, 611.0), p1: (505.0, 614.0), p2: (499.0, 617.0) })/Line(Line { p0: (499.0, 617.0), p1: (511.0, 611.0) }) = 0.0000008537736462515939 degrees
* bhRIisinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* ssRIisinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sRIisinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* nDRIisinh: Quad(QuadBez { p0: (284.0, 274.5), p1: (274.0, 263.0), p2: (264.0, 251.0) })/Quad(QuadBez { p0: (264.0, 251.0), p1: (304.0, 282.0), p2: (345.0, 304.5) }) = 12.418744601780118 degrees
* ka_rephasinh: Quad(QuadBez { p0: (281.5, 281.0), p1: (266.0, 269.0), p2: (257.0, 260.0) })/Quad(QuadBez { p0: (257.0, 260.0), p1: (281.0, 278.0), p2: (312.0, 294.5) }) = 8.130102354156005 degrees
* ca_rephasinh: Quad(QuadBez { p0: (128.5, 233.5), p1: (159.0, 268.0), p2: (197.0, 287.0) })/Quad(QuadBez { p0: (197.0, 287.0), p1: (140.0, 273.0), p2: (99.0, 255.5) }) = 12.765565781058607 degrees
* cha_rephasinh: Quad(QuadBez { p0: (243.0, 299.0), p1: (243.0, 299.0), p2: (244.0, 300.0) })/Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) = 0.0000012074182697257333 degrees
* jha_rephasinh: Quad(QuadBez { p0: (284.0, 306.0), p1: (244.0, 277.0), p2: (228.0, 261.0) })/Quad(QuadBez { p0: (228.0, 261.0), p1: (265.0, 288.0), p2: (316.0, 311.0) }) = 8.880659150520234 degrees
* nya_rephasinh: Quad(QuadBez { p0: (393.5, 289.0), p1: (377.0, 276.0), p2: (368.0, 268.0) })/Quad(QuadBez { p0: (368.0, 268.0), p1: (393.0, 286.0), p2: (424.5, 303.0) }) = 5.879652082133404 degrees
* dda_rephasinh: Quad(QuadBez { p0: (119.5, 233.5), p1: (146.0, 271.0), p2: (190.0, 291.0) })/Quad(QuadBez { p0: (190.0, 291.0), p1: (136.0, 276.0), p2: (102.5, 257.5) }) = 8.919843783662284 degrees
* dda_rephasinh: Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) })/Quad(QuadBez { p0: (376.0, 97.0), p1: (375.0, 96.0), p2: (376.0, 97.0) }) = 0.0000012074182697257333 degrees
* ddha_rephasinh: Quad(QuadBez { p0: (154.0, 247.0), p1: (181.0, 265.0), p2: (212.0, 276.0) })/Quad(QuadBez { p0: (212.0, 276.0), p1: (148.0, 263.0), p2: (100.0, 241.5) }) = 8.05466358338026 degrees
* nndda_rephasinh: Quad(QuadBez { p0: (240.5, 233.5), p1: (267.0, 271.0), p2: (311.0, 291.0) })/Quad(QuadBez { p0: (311.0, 291.0), p1: (257.0, 276.0), p2: (223.5, 257.5) }) = 8.919843783662284 degrees
* nndda_rephasinh: Quad(QuadBez { p0: (497.0, 97.0), p1: (496.0, 96.0), p2: (497.0, 97.0) })/Quad(QuadBez { p0: (497.0, 97.0), p1: (496.0, 96.0), p2: (497.0, 97.0) }) = 0.0000012074182697257333 degrees
* ta_rephasinh: Quad(QuadBez { p0: (62.0, 62.0), p1: (60.0, 59.0), p2: (59.0, 55.0) })/Quad(QuadBez { p0: (59.0, 55.0), p1: (59.0, 56.0), p2: (51.0, 60.5) }) = 14.036243467926484 degrees
* ta_rephasinh: Quad(QuadBez { p0: (264.5, 372.5), p1: (255.0, 350.0), p2: (243.0, 331.0) })/Quad(QuadBez { p0: (243.0, 331.0), p1: (245.0, 333.0), p2: (248.0, 336.0) }) = 12.724355685422392 degrees
* ta_rephasinh: Quad(QuadBez { p0: (258.0, 297.0), p1: (227.0, 273.0), p2: (211.0, 256.0) })/Quad(QuadBez { p0: (211.0, 256.0), p1: (219.0, 263.0), p2: (223.0, 265.5) }) = 5.549779423218771 degrees
* na_rephasinh: Quad(QuadBez { p0: (258.0, 264.0), p1: (248.0, 253.0), p2: (239.0, 242.0) })/Quad(QuadBez { p0: (239.0, 242.0), p1: (278.0, 272.0), p2: (319.0, 294.0) }) = 13.14200110867215 degrees
* bha_rephasinh: Quad(QuadBez { p0: (129.5, 244.5), p1: (151.0, 277.0), p2: (187.0, 295.0) })/Quad(QuadBez { p0: (187.0, 295.0), p1: (132.0, 283.0), p2: (91.5, 264.0) }) = 14.257035359650082 degrees
* ssa_rephasinh: Quad(QuadBez { p0: (244.0, 299.0), p1: (244.0, 299.0), p2: (245.0, 300.0) })/Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) = 0.0000012074182697257333 degrees
* sa_rephasinh: Quad(QuadBez { p0: (121.5, 246.5), p1: (157.0, 284.0), p2: (207.0, 305.0) })/Quad(QuadBez { p0: (207.0, 305.0), p1: (144.0, 294.0), p2: (98.0, 273.5) }) = 12.878222517507803 degrees
* kSsa_rephasinh: Quad(QuadBez { p0: (296.0, 286.0), p1: (278.0, 272.0), p2: (267.0, 261.0) })/Quad(QuadBez { p0: (267.0, 261.0), p1: (304.0, 288.0), p2: (354.5, 311.0) }) = 8.880659150520234 degrees
* kSsa_rephasinh: Quad(QuadBez { p0: (750.0, 299.0), p1: (750.0, 299.0), p2: (751.0, 300.0) })/Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) = 0.0000012074182697257333 degrees
* kVa_rephasinh: Quad(QuadBez { p0: (267.0, 286.0), p1: (249.0, 272.0), p2: (238.0, 261.0) })/Quad(QuadBez { p0: (238.0, 261.0), p1: (275.0, 288.0), p2: (325.5, 311.0) }) = 8.880659150520234 degrees
* tVa_rephasinh: Quad(QuadBez { p0: (73.0, 59.0), p1: (71.0, 55.0), p2: (70.0, 51.0) })/Quad(QuadBez { p0: (70.0, 51.0), p1: (70.0, 52.0), p2: (62.0, 56.5) }) = 14.036243467926484 degrees
* tVa_rephasinh: Quad(QuadBez { p0: (246.5, 278.0), p1: (232.0, 265.0), p2: (224.0, 257.0) })/Quad(QuadBez { p0: (224.0, 257.0), p1: (240.0, 269.0), p2: (254.5, 277.5) }) = 8.130102354156005 degrees
* tTha_rephasinh: Quad(QuadBez { p0: (85.0, 59.0), p1: (83.0, 55.0), p2: (82.0, 51.0) })/Quad(QuadBez { p0: (82.0, 51.0), p1: (82.0, 52.0), p2: (74.0, 56.5) }) = 14.036243467926484 degrees
* tTha_rephasinh: Quad(QuadBez { p0: (290.0, 374.0), p1: (281.0, 352.0), p2: (269.0, 333.0) })/Quad(QuadBez { p0: (269.0, 333.0), p1: (271.0, 335.0), p2: (273.0, 337.0) }) = 12.724355685422392 degrees
* tTha_rephasinh: Quad(QuadBez { p0: (258.5, 278.0), p1: (244.0, 265.0), p2: (236.0, 257.0) })/Quad(QuadBez { p0: (236.0, 257.0), p1: (252.0, 269.0), p2: (266.5, 277.5) }) = 8.130102354156005 degrees
* nDa_rephasinh: Quad(QuadBez { p0: (288.5, 281.5), p1: (280.0, 273.0), p2: (271.0, 264.0) })/Quad(QuadBez { p0: (271.0, 264.0), p1: (307.0, 290.0), p2: (344.0, 308.5) }) = 9.162347045721706 degrees
* nDha_rephasinh: Quad(QuadBez { p0: (255.0, 265.5), p1: (245.0, 254.0), p2: (234.0, 242.0) })/Quad(QuadBez { p0: (234.0, 242.0), p1: (274.0, 272.0), p2: (315.0, 294.0) }) = 10.61965527615514 degrees
* nVa_rephasinh: Quad(QuadBez { p0: (285.0, 251.0), p1: (275.0, 240.0), p2: (265.0, 228.0) })/Quad(QuadBez { p0: (265.0, 228.0), p1: (305.0, 258.0), p2: (345.5, 280.0) }) = 13.324531261890755 degrees
* nTha_rephasinh: Quad(QuadBez { p0: (311.0, 282.0), p1: (310.0, 281.0), p2: (307.0, 279.0) })/Quad(QuadBez { p0: (307.0, 279.0), p1: (335.0, 295.0), p2: (361.5, 305.5) }) = 3.94518622903751 degrees
* Eng (U+014A): Line(Line { p0: (176.0, 555.0), p1: (178.0, 551.0) })/Quad(QuadBez { p0: (178.0, 551.0), p1: (177.0, 554.0), p2: (177.0, 554.0) }) = 8.130102354156051 degrees
* fi (U+FB01): Line(Line { p0: (296.0, 453.0), p1: (299.0, 438.0) })/Line(Line { p0: (299.0, 438.0), p1: (297.0, 454.0) }) = 4.184916125118406 degrees
* u111E5 (U+111E5): Quad(QuadBez { p0: (533.0, 316.0), p1: (580.0, 261.0), p2: (604.0, 171.0) })/Quad(QuadBez { p0: (604.0, 171.0), p1: (603.0, 202.0), p2: (618.5, 225.0) }) = 13.083806912142956 degrees
* u111E9 (U+111E9): Quad(QuadBez { p0: (973.0, 306.5), p1: (1015.0, 217.0), p2: (1033.0, 112.0) })/Line(Line { p0: (1033.0, 112.0), p1: (1033.0, 424.0) }) = 9.727578551401624 degrees
* u111EF (U+111EF): Quad(QuadBez { p0: (745.0, 271.0), p1: (755.0, 230.0), p2: (760.0, 190.0) })/Line(Line { p0: (760.0, 190.0), p1: (760.0, 421.0) }) = 7.125016348901757 degrees
* u111F3 (U+111F3): Quad(QuadBez { p0: (1038.0, 269.0), p1: (1048.0, 228.0), p2: (1054.0, 187.0) })/Line(Line { p0: (1054.0, 187.0), p1: (1054.0, 421.0) }) = 8.325650330426848 degrees
* uni0DE8 (U+0DE8): Quad(QuadBez { p0: (580.5, 122.0), p1: (577.0, 104.0), p2: (576.0, 98.0) })/Line(Line { p0: (576.0, 98.0), p1: (576.0, 99.0) }) = 9.462322208025613 degrees
* uni0DE8 (U+0DE8): Line(Line { p0: (576.0, 98.0), p1: (576.0, 99.0) })/Quad(QuadBez { p0: (576.0, 99.0), p1: (569.0, 67.0), p2: (559.5, 38.5) }) = 12.33908727832618 degrees
* uni0DE9 (U+0DE9): Quad(QuadBez { p0: (580.5, 122.0), p1: (577.0, 104.0), p2: (576.0, 98.0) })/Line(Line { p0: (576.0, 98.0), p1: (576.0, 99.0) }) = 9.462322208025613 degrees
* uni0DE9 (U+0DE9): Line(Line { p0: (576.0, 98.0), p1: (576.0, 99.0) })/Quad(QuadBez { p0: (576.0, 99.0), p1: (569.0, 67.0), p2: (559.5, 38.5) }) = 12.33908727832618 degrees
* uni0DEE (U+0DEE): Quad(QuadBez { p0: (206.5, 424.5), p1: (168.0, 399.0), p2: (143.0, 375.0) })/Quad(QuadBez { p0: (143.0, 375.0), p1: (170.0, 400.0), p2: (216.0, 424.0) }) = 1.0334588338586708 degrees
* uni0DEF (U+0DEF): Quad(QuadBez { p0: (580.5, 122.0), p1: (577.0, 104.0), p2: (576.0, 98.0) })/Line(Line { p0: (576.0, 98.0), p1: (576.0, 99.0) }) = 9.462322208025613 degrees
* uni0DEF (U+0DEF): Line(Line { p0: (576.0, 98.0), p1: (576.0, 99.0) })/Quad(QuadBez { p0: (576.0, 99.0), p1: (569.0, 67.0), p2: (559.5, 38.5) }) = 12.33908727832618 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (880.0, 196.5), p1: (880.0, 201.0), p2: (881.0, 205.0) })/Quad(QuadBez { p0: (881.0, 205.0), p1: (869.0, 171.0), p2: (857.5, 134.5) }) = 5.40379136024966 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (562.0, 109.0), p1: (558.0, 152.0), p2: (555.0, 217.0) })/Quad(QuadBez { p0: (555.0, 217.0), p1: (553.0, 190.0), p2: (546.5, 152.0) }) = 6.878940093123571 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (460.5, 72.0), p1: (453.0, 118.0), p2: (450.0, 171.0) })/Quad(QuadBez { p0: (450.0, 171.0), p1: (445.0, 145.0), p2: (437.5, 110.0) }) = 14.125227350760849 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (590.5, 181.5), p1: (592.0, 141.0), p2: (597.0, 88.0) })/Quad(QuadBez { p0: (597.0, 88.0), p1: (603.0, 141.0), p2: (616.0, 191.0) }) = 11.848128138692037 degrees
* uni0DF4 (U+0DF4): Quad(QuadBez { p0: (817.0, 151.0), p1: (819.0, 122.0), p2: (820.0, 109.0) })/Quad(QuadBez { p0: (820.0, 109.0), p1: (821.0, 123.0), p2: (829.5, 149.5) }) = 8.484322134970418 degrees
* questiondown (U+00BF): Quad(QuadBez { p0: (235.0, 365.0), p1: (236.0, 366.0), p2: (235.0, 365.0) })/Quad(QuadBez { p0: (235.0, 365.0), p1: (236.0, 366.0), p2: (235.0, 365.0) }) = 0.0000012074182697257333 degrees
* trademark (U+2122): Quad(QuadBez { p0: (315.0, 531.5), p1: (312.0, 543.0), p2: (311.0, 548.0) })/Line(Line { p0: (311.0, 548.0), p1: (309.0, 487.0) }) = 13.187809921305556 degrees
* lvakuru (U+EC7F): Quad(QuadBez { p0: (304.0, 318.5), p1: (292.0, 326.0), p2: (284.0, 326.0) })/Quad(QuadBez { p0: (284.0, 326.0), p1: (312.0, 331.0), p2: (330.0, 318.0) }) = 10.124671655397806 degrees [code: found-jaggy-segments]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments (overlapping_path_segments)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have overlapping path segments:

* uni0D94 (U+0D94): Line(Line { p0: (326.0, 83.0), p1: (326.0, 83.0) }) has the same coordinates as a previous segment.
* uni0D94 (U+0D94): Quad(QuadBez { p0: (326.0, 83.0), p1: (326.0, 83.0), p2: (326.0, 83.0) }) has the same coordinates as a previous segment.
* uni0D96 (U+0D96): Line(Line { p0: (326.0, 83.0), p1: (326.0, 83.0) }) has the same coordinates as a previous segment.
* uni0D96 (U+0D96): Quad(QuadBez { p0: (326.0, 83.0), p1: (326.0, 83.0), p2: (326.0, 83.0) }) has the same coordinates as a previous segment.
* uni0D9E (U+0D9E): Line(Line { p0: (339.0, 97.0), p1: (339.0, 97.0) }) has the same coordinates as a previous segment.
* uni0D9E (U+0D9E): Quad(QuadBez { p0: (339.0, 97.0), p1: (339.0, 97.0), p2: (339.0, 97.0) }) has the same coordinates as a previous segment.
* uni0DA1 (U+0DA1): Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) has the same coordinates as a previous segment.
* uni0DA4 (U+0DA4): Line(Line { p0: (864.0, 492.0), p1: (864.0, 492.0) }) has the same coordinates as a previous segment.
* uni0DC2 (U+0DC2): Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSsasinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* tVasinh: Line(Line { p0: (73.0, 57.0), p1: (73.0, 59.0) }) has the same coordinates as a previous segment.
* tThasinh: Line(Line { p0: (85.0, 57.0), p1: (85.0, 59.0) }) has the same coordinates as a previous segment.
* ngsinh: Line(Line { p0: (339.0, 97.0), p1: (339.0, 97.0) }) has the same coordinates as a previous segment.
* ngsinh: Quad(QuadBez { p0: (339.0, 97.0), p1: (339.0, 97.0), p2: (339.0, 97.0) }) has the same coordinates as a previous segment.
* chsinh: Line(Line { p0: (234.0, 300.0), p1: (233.0, 299.0) }) has the same coordinates as a previous segment.
* jhsinh: Line(Line { p0: (760.0, 664.0), p1: (767.0, 666.0) }) has the same coordinates as a previous segment.
* nysinh: Line(Line { p0: (864.0, 492.0), p1: (864.0, 492.0) }) has the same coordinates as a previous segment.
* dhsinh: Line(Line { p0: (283.0, 664.0), p1: (290.0, 666.0) }) has the same coordinates as a previous segment.
* bsinh: Line(Line { p0: (288.0, 713.0), p1: (296.0, 715.0) }) has the same coordinates as a previous segment.
* msinh: Line(Line { p0: (286.0, 708.0), p1: (292.0, 709.0) }) has the same coordinates as a previous segment.
* mbsinh: Line(Line { p0: (284.0, 707.0), p1: (292.0, 709.0) }) has the same coordinates as a previous segment.
* vsinh: Line(Line { p0: (269.0, 718.0), p1: (275.0, 719.0) }) has the same coordinates as a previous segment.
* sssinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSssinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* kVsinh: Line(Line { p0: (733.0, 718.0), p1: (739.0, 719.0) }) has the same coordinates as a previous segment.
* tVsinh: Line(Line { p0: (120.0, 52.0), p1: (120.0, 53.0) }) has the same coordinates as a previous segment.
* tVsinh: Line(Line { p0: (754.0, 718.0), p1: (760.0, 719.0) }) has the same coordinates as a previous segment.
* tThsinh: Line(Line { p0: (85.0, 57.0), p1: (85.0, 59.0) }) has the same coordinates as a previous segment.
* nDhsinh: Line(Line { p0: (716.0, 664.0), p1: (723.0, 666.0) }) has the same coordinates as a previous segment.
* nVsinh: Line(Line { p0: (706.0, 718.0), p1: (712.0, 719.0) }) has the same coordinates as a previous segment.
* dVsinh: Line(Line { p0: (403.0, 718.0), p1: (409.0, 719.0) }) has the same coordinates as a previous segment.
* ngIsinh: Line(Line { p0: (339.0, 97.0), p1: (339.0, 97.0) }) has the same coordinates as a previous segment.
* ngIsinh: Quad(QuadBez { p0: (339.0, 97.0), p1: (339.0, 97.0), p2: (339.0, 97.0) }) has the same coordinates as a previous segment.
* chIsinh: Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) has the same coordinates as a previous segment.
* nyIsinh: Line(Line { p0: (864.0, 492.0), p1: (864.0, 492.0) }) has the same coordinates as a previous segment.
* nyIsinh: Line(Line { p0: (866.0, 492.0), p1: (866.0, 492.0) }) has the same coordinates as a previous segment.
* ssIsinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSsIsinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* tVIsinh: Line(Line { p0: (73.0, 57.0), p1: (73.0, 59.0) }) has the same coordinates as a previous segment.
* tThIsinh: Line(Line { p0: (85.0, 57.0), p1: (85.0, 59.0) }) has the same coordinates as a previous segment.
* ngIisinh: Line(Line { p0: (339.0, 97.0), p1: (339.0, 97.0) }) has the same coordinates as a previous segment.
* ngIisinh: Quad(QuadBez { p0: (339.0, 97.0), p1: (339.0, 97.0), p2: (339.0, 97.0) }) has the same coordinates as a previous segment.
* chIisinh: Line(Line { p0: (224.0, 300.0), p1: (223.0, 299.0) }) has the same coordinates as a previous segment.
* nyIisinh: Line(Line { p0: (864.0, 492.0), p1: (864.0, 492.0) }) has the same coordinates as a previous segment.
* ddIisinh: Line(Line { p0: (375.0, 97.0), p1: (375.0, 97.0) }) has the same coordinates as a previous segment.
* ddIisinh: Quad(QuadBez { p0: (375.0, 97.0), p1: (375.0, 97.0), p2: (375.0, 97.0) }) has the same coordinates as a previous segment.
* nnddIisinh: Line(Line { p0: (499.0, 97.0), p1: (499.0, 97.0) }) has the same coordinates as a previous segment.
* nnddIisinh: Quad(QuadBez { p0: (499.0, 97.0), p1: (499.0, 97.0), p2: (499.0, 97.0) }) has the same coordinates as a previous segment.
* bIisinh: Quad(QuadBez { p0: (511.0, 611.0), p1: (505.0, 614.0), p2: (499.0, 617.0) }) has the same coordinates as a previous segment.
* ssIisinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSsIisinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* tVIisinh: Line(Line { p0: (80.0, 57.0), p1: (80.0, 59.0) }) has the same coordinates as a previous segment.
* tThIisinh: Line(Line { p0: (85.0, 57.0), p1: (85.0, 59.0) }) has the same coordinates as a previous segment.
* chUsinh: Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) has the same coordinates as a previous segment.
* tUsinh: Line(Line { p0: (62.0, 68.0), p1: (62.0, 70.0) }) has the same coordinates as a previous segment.
* ssUsinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSsUsinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* tThUsinh: Line(Line { p0: (85.0, 65.0), p1: (85.0, 67.0) }) has the same coordinates as a previous segment.
* chUusinh: Line(Line { p0: (254.0, 300.0), p1: (253.0, 299.0) }) has the same coordinates as a previous segment.
* nyUusinh: Line(Line { p0: (845.0, 490.0), p1: (845.0, 490.0) }) has the same coordinates as a previous segment.
* ssUusinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSsUusinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* tVUusinh: Line(Line { p0: (80.0, 66.0), p1: (80.0, 68.0) }) has the same coordinates as a previous segment.
* tThUusinh: Line(Line { p0: (85.0, 66.0), p1: (85.0, 68.0) }) has the same coordinates as a previous segment.
* ssRasinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* jhRsinh: Line(Line { p0: (760.0, 664.0), p1: (767.0, 666.0) }) has the same coordinates as a previous segment.
* dhRsinh: Line(Line { p0: (283.0, 664.0), p1: (290.0, 666.0) }) has the same coordinates as a previous segment.
* bRsinh: Line(Line { p0: (288.0, 713.0), p1: (296.0, 715.0) }) has the same coordinates as a previous segment.
* mRsinh: Line(Line { p0: (286.0, 708.0), p1: (292.0, 709.0) }) has the same coordinates as a previous segment.
* vRsinh: Line(Line { p0: (269.0, 718.0), p1: (275.0, 719.0) }) has the same coordinates as a previous segment.
* ssRsinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* ssRIsinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* ddRIisinh: Line(Line { p0: (375.0, 97.0), p1: (375.0, 97.0) }) has the same coordinates as a previous segment.
* ddRIisinh: Quad(QuadBez { p0: (375.0, 97.0), p1: (375.0, 97.0), p2: (375.0, 97.0) }) has the same coordinates as a previous segment.
* bRIisinh: Quad(QuadBez { p0: (511.0, 611.0), p1: (505.0, 614.0), p2: (499.0, 617.0) }) has the same coordinates as a previous segment.
* ssRIisinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* nga_rephasinh: Line(Line { p0: (339.0, 97.0), p1: (339.0, 97.0) }) has the same coordinates as a previous segment.
* nga_rephasinh: Quad(QuadBez { p0: (339.0, 97.0), p1: (339.0, 97.0), p2: (339.0, 97.0) }) has the same coordinates as a previous segment.
* cha_rephasinh: Line(Line { p0: (244.0, 300.0), p1: (243.0, 299.0) }) has the same coordinates as a previous segment.
* nya_rephasinh: Line(Line { p0: (864.0, 492.0), p1: (864.0, 492.0) }) has the same coordinates as a previous segment.
* ssa_rephasinh: Line(Line { p0: (245.0, 300.0), p1: (244.0, 299.0) }) has the same coordinates as a previous segment.
* kSsa_rephasinh: Line(Line { p0: (751.0, 300.0), p1: (750.0, 299.0) }) has the same coordinates as a previous segment.
* tVa_rephasinh: Line(Line { p0: (73.0, 57.0), p1: (73.0, 59.0) }) has the same coordinates as a previous segment.
* tTha_rephasinh: Line(Line { p0: (85.0, 57.0), p1: (85.0, 59.0) }) has the same coordinates as a previous segment.
* Ccedilla (U+00C7): Line(Line { p0: (346.0, -76.0), p1: (346.0, -76.0) }) has the same coordinates as a previous segment.
* Ccedilla (U+00C7): Quad(QuadBez { p0: (346.0, -76.0), p1: (346.0, -76.0), p2: (346.0, -76.0) }) has the same coordinates as a previous segment.
* Scedilla (U+015E): Line(Line { p0: (269.0, -76.0), p1: (269.0, -76.0) }) has the same coordinates as a previous segment.
* Scedilla (U+015E): Quad(QuadBez { p0: (269.0, -76.0), p1: (269.0, -76.0), p2: (269.0, -76.0) }) has the same coordinates as a previous segment.
* uni0162 (U+0162): Line(Line { p0: (289.0, -76.0), p1: (289.0, -76.0) }) has the same coordinates as a previous segment.
* uni0162 (U+0162): Quad(QuadBez { p0: (289.0, -76.0), p1: (289.0, -76.0), p2: (289.0, -76.0) }) has the same coordinates as a previous segment.
* ccedilla (U+00E7): Line(Line { p0: (256.0, -71.0), p1: (256.0, -71.0) }) has the same coordinates as a previous segment.
* ccedilla (U+00E7): Quad(QuadBez { p0: (256.0, -71.0), p1: (256.0, -71.0), p2: (256.0, -71.0) }) has the same coordinates as a previous segment.
* scedilla (U+015F): Line(Line { p0: (246.0, -86.0), p1: (246.0, -86.0) }) has the same coordinates as a previous segment.
* scedilla (U+015F): Quad(QuadBez { p0: (246.0, -86.0), p1: (246.0, -86.0), p2: (246.0, -86.0) }) has the same coordinates as a previous segment.
* uni0163 (U+0163): Line(Line { p0: (216.0, -86.0), p1: (216.0, -86.0) }) has the same coordinates as a previous segment.
* uni0163 (U+0163): Quad(QuadBez { p0: (216.0, -86.0), p1: (216.0, -86.0), p2: (216.0, -86.0) }) has the same coordinates as a previous segment.
* u111EE (U+111EE): Quad(QuadBez { p0: (670.0, 271.0), p1: (670.0, 271.0), p2: (670.0, 271.0) }) has the same coordinates as a previous segment.
* asterisk (U+002A): Quad(QuadBez { p0: (116.0, 570.0), p1: (119.0, 561.0), p2: (119.0, 564.0) }) has the same coordinates as a previous segment.
* uni0327 (U+0327): Line(Line { p0: (30.0, -72.0), p1: (30.0, -72.0) }) has the same coordinates as a previous segment.
* uni0327 (U+0327): Quad(QuadBez { p0: (30.0, -72.0), p1: (30.0, -72.0), p2: (30.0, -72.0) }) has the same coordinates as a previous segment.
* cedilla (U+00B8): Line(Line { p0: (127.0, -72.0), p1: (127.0, -72.0) }) has the same coordinates as a previous segment.
* cedilla (U+00B8): Quad(QuadBez { p0: (127.0, -72.0), p1: (127.0, -72.0), p2: (127.0, -72.0) }) has the same coordinates as a previous segment. [code: overlapping-path-segments]
  
  

</div>
</details>





<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? (outline_semi_vertical)</summary>
    <div>








- ⚠️ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

* aasign_viramasinh: Line(Line { p0: (131.0, 435.0), p1: (132.0, 719.0) }) (angle: 89.80 degrees, expected: 90.00 degrees)
* rsinh: Line(Line { p0: (54.0, 300.0), p1: (57.0, 764.0) }) (angle: 89.63 degrees, expected: 90.00 degrees)
* nyUsinh: Line(Line { p0: (1035.0, -240.0), p1: (777.0, -242.0) }) (angle: -179.56 degrees, expected: -180.00 degrees)
* dUsinh: Line(Line { p0: (454.0, -240.0), p1: (196.0, -242.0) }) (angle: -179.56 degrees, expected: -180.00 degrees)
* ndUsinh: Line(Line { p0: (547.0, -240.0), p1: (289.0, -242.0) }) (angle: -179.56 degrees, expected: -180.00 degrees)
* mUsinh: Line(Line { p0: (633.0, 223.0), p1: (631.0, -212.0) }) (angle: -90.26 degrees, expected: -90.00 degrees)
* vUsinh: Line(Line { p0: (565.0, 179.0), p1: (563.0, -215.0) }) (angle: -90.29 degrees, expected: -90.00 degrees)
* kVUsinh: Line(Line { p0: (1051.0, 179.0), p1: (1049.0, -215.0) }) (angle: -90.29 degrees, expected: -90.00 degrees)
* tVUsinh: Line(Line { p0: (1006.0, 179.0), p1: (1004.0, -215.0) }) (angle: -90.29 degrees, expected: -90.00 degrees)
* nDUsinh: Line(Line { p0: (908.0, -240.0), p1: (650.0, -242.0) }) (angle: -179.56 degrees, expected: -180.00 degrees)
* nVUsinh: Line(Line { p0: (1027.0, 179.0), p1: (1025.0, -215.0) }) (angle: -90.29 degrees, expected: -90.00 degrees)
* dVUsinh: Line(Line { p0: (699.0, 179.0), p1: (697.0, -215.0) }) (angle: -90.29 degrees, expected: -90.00 degrees)
* khUusinh: Line(Line { p0: (640.0, 225.0), p1: (642.0, -183.0) }) (angle: -89.72 degrees, expected: -90.00 degrees)
* ghUusinh: Line(Line { p0: (673.0, 110.0), p1: (675.0, -248.0) }) (angle: -89.68 degrees, expected: -90.00 degrees)
* jhUusinh: Line(Line { p0: (1093.0, 263.0), p1: (1095.0, -158.0) }) (angle: -89.73 degrees, expected: -90.00 degrees)
* ddUusinh: Line(Line { p0: (673.0, 196.0), p1: (675.0, -168.0) }) (angle: -89.69 degrees, expected: -90.00 degrees)
* ddhUusinh: Line(Line { p0: (653.0, 144.0), p1: (655.0, -238.0) }) (angle: -89.70 degrees, expected: -90.00 degrees)
* nnUusinh: Line(Line { p0: (924.0, 256.0), p1: (927.0, -188.0) }) (angle: -89.61 degrees, expected: -90.00 degrees)
* nnddUusinh: Line(Line { p0: (804.0, 196.0), p1: (806.0, -168.0) }) (angle: -89.69 degrees, expected: -90.00 degrees)
* dhUusinh: Line(Line { p0: (633.0, 217.0), p1: (635.0, -198.0) }) (angle: -89.72 degrees, expected: -90.00 degrees)
* nUusinh: Line(Line { p0: (783.0, 131.0), p1: (786.0, -248.0) }) (angle: -89.55 degrees, expected: -90.00 degrees)
* pUusinh: Line(Line { p0: (597.0, 153.0), p1: (599.0, -228.0) }) (angle: -89.70 degrees, expected: -90.00 degrees)
* bUusinh: Line(Line { p0: (653.0, 206.0), p1: (655.0, -156.0) }) (angle: -89.68 degrees, expected: -90.00 degrees)
* mbUusinh: Line(Line { p0: (663.0, 118.0), p1: (665.0, -238.0) }) (angle: -89.68 degrees, expected: -90.00 degrees)
* ssUusinh: Line(Line { p0: (594.0, 144.0), p1: (596.0, -218.0) }) (angle: -89.68 degrees, expected: -90.00 degrees)
* sUusinh: Line(Line { p0: (684.0, 115.0), p1: (686.0, -238.0) }) (angle: -89.68 degrees, expected: -90.00 degrees)
* fUusinh: Line(Line { p0: (677.0, 201.0), p1: (680.0, -167.0) }) (angle: -89.53 degrees, expected: -90.00 degrees)
* kSsUusinh: Line(Line { p0: (1100.0, 144.0), p1: (1102.0, -218.0) }) (angle: -89.68 degrees, expected: -90.00 degrees)
* kVUusinh: Line(Line { p0: (1034.0, 132.0), p1: (1031.0, -255.0) }) (angle: -90.44 degrees, expected: -90.00 degrees)
* tVUusinh: Line(Line { p0: (1014.0, 132.0), p1: (1011.0, -255.0) }) (angle: -90.44 degrees, expected: -90.00 degrees)
* tThUusinh: Line(Line { p0: (1016.0, 172.0), p1: (1013.0, -211.0) }) (angle: -90.45 degrees, expected: -90.00 degrees)
* nDhUusinh: Line(Line { p0: (1032.0, 106.0), p1: (1034.0, -228.0) }) (angle: -89.66 degrees, expected: -90.00 degrees)
* nVUusinh: Line(Line { p0: (1006.0, 132.0), p1: (1003.0, -255.0) }) (angle: -90.44 degrees, expected: -90.00 degrees)
* dVUusinh: Line(Line { p0: (676.0, 132.0), p1: (673.0, -255.0) }) (angle: -90.44 degrees, expected: -90.00 degrees)
* dDhUusinh: Line(Line { p0: (763.0, 111.0), p1: (765.0, -238.0) }) (angle: -89.67 degrees, expected: -90.00 degrees)
* ttTthUusinh: Line(Line { p0: (754.0, 157.0), p1: (751.0, -213.0) }) (angle: -90.46 degrees, expected: -90.00 degrees)
* ghRsinh: Line(Line { p0: (567.0, 486.0), p1: (569.0, 719.0) }) (angle: 89.51 degrees, expected: 90.00 degrees)
* bhRsinh: Line(Line { p0: (581.0, 471.0), p1: (583.0, 713.0) }) (angle: 89.53 degrees, expected: 90.00 degrees)
* fRsinh: Line(Line { p0: (519.0, 458.0), p1: (521.0, 719.0) }) (angle: 89.56 degrees, expected: 90.00 degrees)
* D (U+0044): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* uni01C4 (U+01C4): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* Dcaron (U+010E): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* Dcroat (U+0110): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* uni1E0C (U+1E0C): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* uni01C5 (U+01C5): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* Eth (U+00D0): Line(Line { p0: (263.0, 1.0), p1: (25.0, 0.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* uni018F (U+018F): Line(Line { p0: (33.0, 322.0), p1: (426.0, 324.0) }) (angle: 0.29 degrees, expected: 0.00 degrees)
* Eng (U+014A): Line(Line { p0: (269.0, 0.0), p1: (30.0, -1.0) }) (angle: -179.76 degrees, expected: -180.00 degrees)
* ae (U+00E6): Line(Line { p0: (719.0, 225.0), p1: (414.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* aeacute (U+01FD): Line(Line { p0: (719.0, 225.0), p1: (414.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* e (U+0065): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* eacute (U+00E9): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* ebreve (U+0115): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* ecaron (U+011B): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* ecircumflex (U+00EA): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EBF (U+1EBF): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EC7 (U+1EC7): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EC1 (U+1EC1): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EC3 (U+1EC3): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EC5 (U+1EC5): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni0205 (U+0205): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* edieresis (U+00EB): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* edotaccent (U+0117): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EB9 (U+1EB9): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* egrave (U+00E8): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EBB (U+1EBB): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni0207 (U+0207): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* emacron (U+0113): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* eogonek (U+0119): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni1EBD (U+1EBD): Line(Line { p0: (436.0, 225.0), p1: (131.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* uni0259 (U+0259): Line(Line { p0: (55.0, 223.0), p1: (360.0, 224.0) }) (angle: 0.19 degrees, expected: 0.00 degrees)
* kgreenlandic (U+0138): Line(Line { p0: (347.0, 0.0), p1: (122.0, -1.0) }) (angle: -179.75 degrees, expected: -180.00 degrees)
* oe (U+0153): Line(Line { p0: (786.0, 225.0), p1: (481.0, 223.0) }) (angle: -179.62 degrees, expected: -180.00 degrees)
* bracketleft (U+005B): Line(Line { p0: (62.0, 633.0), p1: (222.0, 632.0) }) (angle: -0.36 degrees, expected: 0.00 degrees)
* bracketright (U+005D): Line(Line { p0: (138.0, 632.0), p1: (298.0, 633.0) }) (angle: 0.36 degrees, expected: 0.00 degrees)
* sterling (U+00A3): Line(Line { p0: (430.0, 1.0), p1: (52.0, 0.0) }) (angle: -179.85 degrees, expected: -180.00 degrees)
* uusignsinh.alt: Line(Line { p0: (23.0, 195.0), p1: (25.0, -209.0) }) (angle: -89.72 degrees, expected: -90.00 degrees)
* uusignsinh.alt3: Line(Line { p0: (19.0, 218.0), p1: (22.0, -208.0) }) (angle: -89.60 degrees, expected: -90.00 degrees)
* fsinh.alt: Line(Line { p0: (467.0, 611.0), p1: (468.0, 739.0) }) (angle: 89.55 degrees, expected: 90.00 degrees)
* fRsinh.alt: Line(Line { p0: (468.0, 611.0), p1: (469.0, 739.0) }) (angle: 89.55 degrees, expected: 90.00 degrees)
* fUusinh.alt: Line(Line { p0: (631.0, 154.0), p1: (633.0, -190.0) }) (angle: -89.67 degrees, expected: -90.00 degrees) [code: found-semi-vertical]
  
  

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






### Summary

| 🔥 FAIL | ⚠️ WARN | ℹ️ INFO | ✅ PASS | ⏩ SKIP | 
| ---|---|---|---|---|
| 3 | 18 | 20 | 96 | 84 | 
| 1% | 8% | 9% | 43% | 38% | 



