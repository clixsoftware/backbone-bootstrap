# This script updates the libs to the latest stable, minified versions.
#!/bin/bash

# Make sure curl is available
curl -V >> /dev/null 2>> /dev/null
if [[ $? -ne 0  ]] ; then
  echo "ERROR: You need curl to run this script. Please install curl using your preferred package manager and try again" >& 2
  exit 1
fi

JQUERY_PATH=`dirname $PWD`/js/libs/jquery
UNDERSCORE_PATH=`dirname $PWD`/js/libs/underscore
BACKBONE_PATH=`dirname $PWD`/js/libs/backbone
REQUIRE_PATH=`dirname $PWD`/js/libs/require

# ------------------------------------------------------------------- backbone.js
echo "You're about to upgrade backbone.js to latest version."
echo "Would you like to continue? [y/n]: "

read CONFIRM
if [[ "$CONFIRM" = "n" ]] ; then
  echo "Update aborted"
else
  echo "Fetching backbone-min.js from http://documentcloud.github.com/backbone/"
  curl  -f -# http://documentcloud.github.com/backbone/backbone-min.js -o $BACKBONE_PATH/backbone-min.js
    if [[ $? -ne 0 ]] ; then
        echo "Ups curl error. Please update manually"
    else
        echo "Yeah, backbone.js has been updated and placed in its proper place in the libs folder"
    echo
    fi
fi

# ------------------------------------------------------------------- underscore.js
echo "You're about to upgrade underscore.js to latest version."
echo "Would you like to continue? [y/n]: "

read CONFIRM
if [[ "$CONFIRM" = "n" ]] ; then
    echo "Update aborted"
else
    echo "Fetching underscore-min.js fro http://documentcloud.github.com/underscore/"
    curl  -f -# http://documentcloud.github.com/underscore/underscore-min.js -o $UNDERSCORE_PATH/underscore-min.js

    if [[ $? -ne 0 ]] ; then
        echo "Ups curl error. Please update manually"
    else
        echo "Yeah, underscore.js has been updated and placed in its proper place in the libs folder"
        echo
    fi
fi

# ------------------------------------------------------------------- jquery.js
echo "You're about to upgrade jquery to latest version."
echo "Would you like to continue? [y/n]: "
read CONFIRM
if [[ "$CONFIRM" = "n" ]] ; then
    echo "Update aborted"
else
    echo "Fetching jquery-latest.min.js from http://code.jquery.com/"
    curl  -f -# http://code.jquery.com/jquery-latest.min.js -o $JQUERY_PATH/jquery-min.js

    if [[ $? -ne 0 ]] ; then
        echo "Ups curl error. Please update manually"
    else
        echo "Yeah, jquery has been updated and placed in its proper place in the libs folder"
        echo
    fi
fi

# ------------------------------------------------------------------- require.js
echo "Finding latest version of requireJS..."
REQUIREJS_URI=`curl -f http://requirejs.org/docs/download.html 2>> /dev/null | \
  grep -o 'http://requirejs.org/docs/release/[0-9]\.[0-9]\.[0-9]/minified/require.js'`
RJS_VERSION=`echo $REQUIREJS_URI | grep -o [0-9]\.[0-9]\.[0-9]`

# Don't update unless we have to
BASE_RJS_VERSION=`cat .requirejs_version`
if [[ $RJS_VERSION = $BASE_RJS_VERSION ]] ; then
  echo "You're version of requireJS is up to date with the latest stable version ($RJS_VERSION)" >& 2
  echo "Thank you and goodby"
  exit 0
fi

echo "You're about to upgrade requireJS from version $BASE_RJS_VERSION to $RJS_VERSION."
echo "Would you like to continue? [y/n]: "

read CONFIRM
if [[ "$CONFIRM" = "n" ]] ; then
  echo "Update aborted"
  exit 2
elif [[ "$CONFIRM" != "y" ]] ; then
  echo "Unrecognized response"
  exit 3
fi

echo "Fetching requireJS v$RJS_VERSION"

curl -f -# $REQUIREJS_URI -o $REQUIRE_PATH/require.js
sed -i "" "s/^REQUIRE_VERSION='[0-9]\.[0-9]\.[0-9]'/REQUIRE_VERSION='$RJS_VERSION'/g" ./build.sh
echo "Build script has been updated to use the latest requireJS version"
echo "Thank you and goodby"

# Finally, store the new version of requireJS in .requirejs_version
echo $RJS_VERSION > .requirejs_version
