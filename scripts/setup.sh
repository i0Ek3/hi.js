#!/bin/bash

normal() {
    # install rvm
    ./rvm-installer

    # setup mirror
    echo "ruby_url=https://cache.ruby-china.com/pub/ruby" > ~/.rvm/user/db

    # install sass/compass
    sudo gem install sass
    sudo gem install compass
}

pc4 normal
