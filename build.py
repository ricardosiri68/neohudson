#!/usr/bin/env python
# coding: utf-8

from jinja2 import Environment, PackageLoader


def main():
    env = Environment(loader=PackageLoader('notesofcoding', 'templates'))
    template = env.get_template('index.html')

    with open('build/index.xml', 'w') as entry_point:
        entry_point.write(template.render())


if __name__ == '__main__':
    main()
