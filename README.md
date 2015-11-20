# Finesse.css
Finesse.css is a CSS toolkit which takes learnings from a range of other CSS frameworks and UI kits.

## Usage
Finesse.css should be included in your application via 2 seperate includes. You own variables (preferably in their own file) need to be included between the finesse tools and the remainder of the toolkit.

    // Main.scss
    @import "path/to/finesse/tools";
    @import "yourVariableOverrides";
    @import "path/to/finesse/finesse";
    
    // Your CSS goes here...

The reason for this is that your variables may require use of the helper functions provided in finesse.css (ie. getColor('customColor')) as well as need to be included before the remainder of the toolkit to override the defaults provided.

## Examples
A visual example of the toolkit's default styles can be found [here](https://app.frontify.com/d/JiVE4P75dUCR/finesse-css-1444405267).

## Credits
Credit goes to [Harry Roberts](http://csswizardry.com/) for the modified version of [inuit.css v5](https://github.com/csswizardry/inuit.css/) using the [ITCSS architecture](http://itcss.io/) together with an adaptation of [csswizardry-grids](http://csswizardry.com/csswizardry-grids/) for the grid system. Also to [Thoughtbot, inc.](http://thoughtbot.com/) for a slightly modified version of their [Bitters scaffold styles](http://bitters.bourbon.io/)
