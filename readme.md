# Plex Subtitle Renamer

Takes a folder of subtitles like:
```
/Season 01
	/Subs
		/ShowName.S01E01
			- English_02.srt
			- English_03.srt
			- Arabic_04.srt
			- Czech_05.srt
		/ShowName.S01E02
			- English_04.srt
			- English_05.srt
			- English_06.srt
			- Arabic_07.srt
			- Czech_08.srt
```

And renames English-matching subtitles to Plex-preferred format:
```
/Season 01
	- ShowName.S01E01.en.01.srt
	- ShowName.S01E01.en.02.srt
	- ShowName.S01E02.en.01.srt
	- ShowName.S01E02.en.02.srt
	- ShowName.S01E02.en.03.srt
```

## Usage

Clone the repo, `npm install`, and pass the parent `Subs` folder path as an argument like:

```
node plex-subtitle-renamer.js /path/to/Subs
```
