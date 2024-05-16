# js-languages

<img src="https://i.imgur.com/qAMPQNO.png" width="100px" align="right" />

With this very simple script, your website can update inner text in an HTML that needs to be updated when a visitor with a different language code comes to your website. It supports multiple pages, any language code (even those that don't yet exist) and infinite elements to translate. It doesn't support language dialects (ex: en_GB or en_US differences) yet.

![GitHub repo size](https://img.shields.io/github/repo-size/spigbop/js-languages?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/spigbop/js-languages?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/spigbop/js-languages?style=for-the-badge)

## Translating a Single Page

Here is how you translate a page with an example:
```html
<html>
    <head>
        <script defer src="src/language.js"></script>
    </head>
    <body>
        <p id="--field-myfield">Original Text</p>
    </body>
</html>
```

The element with the id `--field-myfield` is what is going to be translated.
Your translation key will be `myfield` since its the only thing after `--field-`

Now lets create a file named that matches the Spanish language code `lang_es.json` under `src/data/index`

```json
{
    "myfield": "Original Text is now this text for Spanish speakers!"
}
```

Now when someone with Spanish selected in their browser as their preffered language will see the text just like above.

## Translating Multiple Pages

First, make sure your script is loaded in every single html file that needs translating:

```html
<!-- firstpage.html -->
<html>
    <head>
        <title>First Page</title>
        <script defer src="src/language.js"></script>
    </head>
    <body>
        <p id="--field-fieldwithsamename">I am the first page.</p>
        <p id="--field-uniquefield">I only exist in this page.</p>
    </body>
</html>

<!-- secondpage.html -->
<html>
    <head>
        <title>Second Page</title>
        <script defer src="src/language.js"></script>
    </head>
    <body>
        <p id="--field-fieldwithsamename">I am the second page.</p>
    </body>
</html>
```

Each page has different directories under `data` that store language files.

Let's continue with creating the first Spanish file, `lang_es.json` under `src/data/firstpage`

```json
{
    "fieldwithsamename": "Translated version of first page.",
    "uniquefield": "I am both translated and exist only in this page."
}
```

And for covering the second Spanish file, `lang_es.json` under `src/data/secondpage`

```json
{
    "fieldwithsamename": "My field has the same key but I am different."
}
```

Including some key like `uniquefield` under the second JSON file will result in that key being unused, It won't change the text in the first page nor do anything in the second one.

Our final hierarchy will look something like this:

```
src/
    data/
        firstpage/
            lang_es.json
        secondpage/
            lang_es.json
    language.js
firstpage.html
secondpage.html
```

## Planned for Future

- To reduce file count. If a language is not present, it will default to that language file inside a globals directory.
- Easily implementable example language select popups.
