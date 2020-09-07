
     ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒
     ▒      ▒      ▒
     ▒▒▒    ▒▒▒    ▒▒▒▒
     ▒      ▒          ▒
     ▒▒▒▒▒  ▒      ▒▒▒▒


   About eForms SDK
======================
Development of online systems frontend and backend, convenient and fast, full of accessories:
* Convenient develop Single Page Applications and systems.
* EF supply all needed tools for everything you want to do.
* EF is a single JS light weight file (&lt;200k original size, &lt;100k when zipped)
* Responsive
* Convenient to use on mobile devices
* No dependenties
* No inner calls to 3rd party services (like google/microsoft/etc) good for data safety and excellent for https.
* Write less, do more.
* Reduce development management and cost.

What does EF contains:
*** Controls ***
* Input controls
    * NUM - Numeric (int/float) with optional format
    * TXT - Textbox (inc. password/formatted)
    * TAR - Text area
    * CAL - Date/Time picker (Currently under development)
    * FLU - File uploader (though can attach this functionality to every control using upk property)
    * IMG - Image picker box (also can serve for image display and more)
    * CPK - Color picker
    
* Selector controls
    * TRK - Trackbar
    * CMB - Drop down list / combo box
    * CHK - Checkbox (can define a group of them)
    * RDO - Radio buttons (Currently under development)
    * SBS - Image-capable selectable buttons
    * TBL - Table (Grid view with row selection mode: Single/multiple/none)
    * TRE - Treeview
    * IML - Image list (Currently under development)
* Data controls
    * TBL - Table (Currently under development)
    * TRE - Treeview
* Interactive controls
    * CPT - CAPTCHA (Will not use numbers/letters in the future, so currently still under development)
    * MTR - Meter (Currently under development)
    * PRG - Progress bar
    * LBL - Label (though is implemented in every control using lbl property)
    * CVS - Canvas (with MagicBrush functionality, which is a quick way to draw 2D/3D objects)
    * BTN - Big button
    * SBT - Strip button
    * STR - Buttons strip (toolbox)
    * TAB - Tab page container (Currently under development)
    * SPL - Splitter container
    * IFR - iFrame container
    * BAR - Menubar (Currently under development)
* Online presentation controls (Currently under development)
    * SAT - Customer satisfaction survey (with star selection)
    * CHT - Chatting application (using socket connection)
    * IMG - Changing images box (currently done with IMG control using efc property)
    
*** Accessories ***
    * FRM - Create form
    * TTP - Add tooltip (can be added to any control via ttp property)
    * DBX - Dialog box
    * RIB - Forms ribbon
    * SM - Ajax query manager
    * Use - Download manager
    * GIF - Can create GIF animation
    * TTF - Can create/edit TTF font file and embeed it to HTML/JS file. Can examine a good tool for TTF fomts at https://www.efsdk.com/ef5/tools/ttf .
    * ICO - Can create ICO format icon
    * PDF - Can create PDF file
    * SVG - Canb create complicated SVG objects and use them in HTML/JS file.
    * ON - ObjectNotation is like JSON, but using safe base 64 that is good for transmitting over the network. In the future there will be binary version of this.
    * BIN - Binary data manager.
    
#########################################################################
* EF is extensible
Our system of extensions is safe, as extensions MUST pass EF-SDK security stamp to enter EF-SDK extensions library, preventing from duplications and code incompatibilities to happen, and will be tagged for easy search.

*** Future development ***
* WS - Websocket manager (upgrade from EF v4)
* MID - Possibility to create/edit MIDI files
* ZIP - Possibility to ZIP/Unzip content (frontend and backend)
* EXL - Possibility to create/edit excel worksheet
* TAR + full word processing algorithms (including the possibility to load .doc/.docx/*.rtf files)
* Add Artificial Intelligence power
* Backend development section with server management control panel developed in Python
