#!/bin/sh

DATE=`date +%d%b%Y-%T`
GITHASH="$(git rev-parse --short HEAD)"


cd ../documentation/tests/
echo '<p class='production-data'>' 'Generated on' $DATE '#'$GITHASH '</p>' > data.html
cat data.html specimen.html > specimen_gen.html
cat status.html data.html  > status_gen.html

weasyprint specimen_gen.html specimen.pdf
weasyprint status_gen.html -r 600  status.png

mv ./specimen.pdf ../../documentation/
mv ./daily-status.png ../../documentation/
rm -rf status_gen.html specimen_gen.html data.html
