---
layout: page
title: Performing Rowhammer-like Attacks on OpenSSD NAND Flash
description: Testing whether repeated write and erases can result in Rowhammer effects
img: assets/img/RowhammerCharacterization.png
importance: 1
category: work
related_publications: false
---

Investigated secure memory through testing Rowhammer-like attacks on OpenSSD 3D NAND Flash Memory. Ran experiments using C/microcode to find reverse mapping between aggressor and victim pages, and demonstrated the ability of directing 50,000 bit flips to specific cells per 1 million repeated write cycles. Experimented with and documented how BCH error correction codes on NAND Flash Memory can be bypassed.

Project Link: [https://github.com/jeremywhui/OpenSSD-Rowhammer-Data](https://github.com/jeremywhui/OpenSSD-Rowhammer-Data)
