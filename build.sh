#!/bin/bash

root=$(pwd)
echo $root

rm -rf $root/static

cd $root/main-app && pnpm build
cd $root/app-01 && pnpm build
cd $root/app-02 && pnpm build

mkdir -p $root/static/sub/

mv $root/main-app/dist/* $root/static
mv $root/app-01/dist $root/static/sub/app-01
mv $root/app-02/dist $root/static/sub/app-02
