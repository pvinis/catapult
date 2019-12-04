#!/usr/bin/env bash
set -euxo pipefail


cd ios
bundle e pod install
cd ..
