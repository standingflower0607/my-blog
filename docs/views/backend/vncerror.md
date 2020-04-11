---
title: ラズパイvnc接続での'Cannot currently show desktop'の解決方法
date: 2020-04-02
sidebar: 'auto'
image : ./images/thumbnail/thumbnailGenerate.jpg
categories:
 - backend
tags:
 - python
 - raspberrypi
publish: true
---

ある日、ラズパイにvnc接続しようとしたら、`'Cannot currently show desktop'`が表示されて、接続することができませんでした。

解決方法をググったところ、

@[youtube](https://www.youtube.com/watch?v=nQQFqSOgMSE)

こんな動画が出てきました。

かなり発音のアクセントが強めです。

実際に紹介されていることを試した結果、無事に接続できたのでその方法を書き留めておきたいと思います。

まず、自分のラズパイにssh接続してください。

``` bash
ssh username@ipaddress
```

usernameとipaddressは自分の物を入力してください。

そしたら、
``` bash
sudo raspi-config
```

と打ち、設定画面を開きます。

開いたら、7番目の`Advanced Options`を選んで、そしたら`A5 Resolution`を選択して`1920 × 1080`を選びます。

そしたら、`Finish`を押します。

すると勝手にリブートされるので、少し待った後、もう一度、vnc接続してみるとできます！