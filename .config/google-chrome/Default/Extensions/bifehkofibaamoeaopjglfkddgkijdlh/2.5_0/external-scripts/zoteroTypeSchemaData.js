var ZOTERO_TYPE_SCHEMA = {
	"itemTypes": {
		"1": ["note", "Note", [false],
			[], {}, "treeitem-note.png"
		],
		"2": ["book", "Book", [1, 2, 3, 5, 4],
			[110, 90, 3, 30, 4, 45, 6, 7, 8, 14, 118, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22], {}, "treeitem-book.png"
		],
		"3": ["bookSection", "Book Section", [1, 29, 2, 3, 5, 4],
			[110, 90, 115, 3, 30, 4, 45, 6, 7, 8, 14, 10, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"115": 12
			}, "treeitem-bookSection.png"
		],
		"4": ["journalArticle", "Journal Article", [1, 2, 3, 27, 4],
			[110, 90, 12, 4, 5, 10, 14, 3, 28, 29, 25, 87, 26, 13, 116, 1, 27, 123, 19, 62, 18, 2, 22], {}, "treeitem-journalArticle.png"
		],
		"5": ["magazineArticle", "Magazine Article", [1, 2, 27, 4],
			[110, 90, 12, 4, 5, 14, 10, 87, 13, 116, 1, 27, 123, 19, 62, 18, 2, 22], {}, "treeitem-magazineArticle.png"
		],
		"6": ["newspaperArticle", "Newspaper Article", [1, 2, 27, 4],
			[110, 90, 12, 7, 6, 14, 15, 10, 87, 116, 13, 1, 27, 123, 19, 62, 18, 2, 22], {}, "treeitem-newspaperArticle.png"
		],
		"7": ["thesis", "Thesis", [1, 2],
			[110, 90, 69, 89, 7, 14, 118, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"69": 108,
				"89": 8
			}, "treeitem-thesis.png"
		],
		"8": ["letter", "Letter", [1, 2, 16],
			[110, 90, 65, 14, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"65": 108
			}, "treeitem-letter.png"
		],
		"9": ["manuscript", "Manuscript", [1, 2, 4],
			[110, 90, 66, 7, 14, 118, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"66": 108
			}, "treeitem-manuscript.png"
		],
		"10": ["interview", "Interview", [6, 2, 7, 4],
			[110, 90, 14, 64, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"64": 109
			}, "treeitem-interview.png"
		],
		"11": ["film", "Film", [8, 2, 10, 9],
			[110, 90, 21, 14, 122, 63, 77, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"21": 8,
				"63": 109,
				"122": 108
			}, "treeitem-film.png"
		],
		"12": ["artwork", "Artwork", [22, 2],
			[110, 90, 59, 61, 14, 87, 116, 123, 19, 62, 18, 1, 27, 2, 22], {
				"59": 109
			}, "treeitem-artwork.png"
		],
		"13": ["webpage", "Web Page", [1, 2, 4],
			[110, 90, 91, 70, 14, 116, 1, 27, 87, 2, 22], {
				"70": 108,
				"91": 12
			}, "treeitem-webpage.png"
		],
		"14": ["attachment", "Attachment", [false],
			[110, 27, 1], {}, "treeitem.png"
		],
		"15": ["report", "Report", [1, 2, 5, 4],
			[110, 90, 92, 32, 28, 7, 31, 14, 10, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"31": 8,
				"32": 108,
				"92": 60
			}, "treeitem-report.png"
		],
		"16": ["bill", "Bill", [12, 2, 28],
			[110, 90, 93, 36, 94, 15, 95, 41, 40, 42, 14, 87, 1, 27, 116, 2, 22], {
				"93": 60,
				"94": 4,
				"95": 10
			}, "treeitem-bill.png"
		],
		"17": ["case", "Case", [1, 2, 13],
			[111, 90, 44, 96, 117, 43, 97, 98, 42, 87, 116, 1, 27, 2, 22], {
				"96": 14,
				"97": 4,
				"98": 10,
				"111": 110,
				"117": 60
			}, "treeitem-case.png"
		],
		"18": ["hearing", "Hearing", [2],
			[110, 90, 46, 7, 8, 45, 99, 10, 41, 40, 42, 14, 87, 116, 1, 27, 2, 22], {
				"99": 60
			}, "treeitem-hearing.png"
		],
		"19": ["patent", "Patent", [14, 15, 2],
			[110, 90, 7, 102, 48, 120, 50, 121, 10, 103, 51, 52, 53, 54, 87, 116, 1, 27, 2, 22], {
				"50": 60,
				"52": 14
			}, "treeitem-patent.png"
		],
		"20": ["statute", "Statute", [1, 2],
			[112, 90, 36, 55, 101, 100, 10, 15, 40, 42, 87, 116, 1, 27, 2, 22], {
				"100": 14,
				"101": 60,
				"112": 110
			}, "treeitem-statute.png"
		],
		"21": ["email", "E-mail", [1, 2, 16],
			[113, 90, 14, 116, 1, 27, 87, 2, 22], {
				"113": 110
			}, "treeitem-email.png"
		],
		"22": ["map", "Map", [20, 2, 5],
			[110, 90, 67, 68, 28, 6, 7, 8, 14, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"67": 108
			}, "treeitem-map.png"
		],
		"23": ["blogPost", "Blog Post", [1, 23, 2],
			[110, 90, 107, 70, 14, 1, 27, 87, 116, 2, 22], {
				"70": 108,
				"107": 12
			}, "treeitem-blogPost.png"
		],
		"24": ["instantMessage", "Instant Message", [1, 2, 16],
			[110, 90, 14, 87, 116, 1, 27, 2, 22], {}, "treeitem-instantMessage.png"
		],
		"25": ["forumPost", "Forum Post", [1, 2],
			[110, 90, 104, 79, 14, 87, 116, 1, 27, 2, 22], {
				"79": 108,
				"104": 12
			}, "treeitem-forumPost.png"
		],
		"26": ["audioRecording", "Audio Recording", [17, 18, 2, 19],
			[110, 90, 71, 28, 4, 45, 7, 72, 14, 77, 87, 11, 116, 123, 19, 62, 18, 1, 27, 2, 22], {
				"71": 109,
				"72": 8
			}, "treeitem-audioRecording.png"
		],
		"27": ["presentation", "Presentation", [24, 2],
			[110, 90, 74, 14, 7, 75, 1, 27, 87, 116, 2, 22], {
				"74": 108
			}, "treeitem-presentation.png"
		],
		"28": ["videoRecording", "Video Recording", [8, 11, 2, 10, 9],
			[110, 90, 63, 28, 4, 45, 7, 76, 14, 77, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"63": 109,
				"76": 8
			}, "treeitem-videoRecording.png"
		],
		"29": ["tvBroadcast", "TV Broadcast", [8, 11, 2, 25, 10, 9],
			[110, 90, 119, 105, 63, 7, 78, 14, 77, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"63": 109,
				"78": 8,
				"105": 60,
				"119": 12
			}, "treeitem-tvBroadcast.png"
		],
		"30": ["radioBroadcast", "Radio Broadcast", [8, 11, 2, 25, 10, 9],
			[110, 90, 119, 105, 71, 7, 78, 14, 77, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"71": 109,
				"78": 8,
				"105": 60,
				"119": 12
			}, "treeitem-radioBroadcast.png"
		],
		"31": ["podcast", "Podcast", [26, 2, 25],
			[110, 90, 28, 105, 80, 77, 1, 27, 87, 116, 2, 22], {
				"80": 109,
				"105": 60
			}, "treeitem-podcast.png"
		],
		"32": ["computerProgram", "Computer Program", [21, 2],
			[110, 90, 28, 81, 14, 82, 7, 83, 88, 11, 116, 1, 2, 123, 19, 62, 18, 27, 22], {
				"83": 8
			}, "treeitem-computerProgram.png"
		],
		"33": ["conferencePaper", "Conference Paper", [1, 2, 3, 5, 4],
			[110, 90, 14, 114, 84, 7, 8, 4, 10, 3, 87, 26, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"114": 12
			}, "treeitem-conferencePaper.png"
		],
		"34": ["document", "Document", [1, 2, 3, 27, 4],
			[110, 90, 8, 14, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {}, "treeitem.png"
		],
		"35": ["encyclopediaArticle", "Encyclopedia Article", [1, 2, 3, 5, 4],
			[110, 90, 85, 3, 30, 4, 45, 6, 7, 8, 14, 10, 11, 116, 1, 27, 87, 123, 19, 62, 18, 2, 22], {
				"85": 12
			}, "treeitem-encyclopediaArticle.png"
		],
		"36": ["dictionaryEntry", "Dictionary Entry", [1, 2, 3, 5, 4],
			[110, 90, 86, 3, 30, 4, 45, 6, 7, 8, 14, 10, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22], {
				"86": 12
			}, "treeitem-dictionaryEntry.png"
		]
	},
	"creatorTypes": {
		"1": ["author", "Author"],
		"2": ["contributor", "Contributor"],
		"3": ["editor", "Editor"],
		"4": ["translator", "Translator"],
		"5": ["seriesEditor", "Series Editor"],
		"6": ["interviewee", "Interview With"],
		"7": ["interviewer", "Interviewer"],
		"8": ["director", "Director"],
		"9": ["scriptwriter", "Scriptwriter"],
		"10": ["producer", "Producer"],
		"11": ["castMember", "Cast Member"],
		"12": ["sponsor", "Sponsor"],
		"13": ["counsel", "Counsel"],
		"14": ["inventor", "Inventor"],
		"15": ["attorneyAgent", "Attorney/Agent"],
		"16": ["recipient", "Recipient"],
		"17": ["performer", "Performer"],
		"18": ["composer", "Composer"],
		"19": ["wordsBy", "Words By"],
		"20": ["cartographer", "Cartographer"],
		"21": ["programmer", "Programmer"],
		"22": ["artist", "Artist"],
		"23": ["commenter", "Commenter"],
		"24": ["presenter", "Presenter"],
		"25": ["guest", "Guest"],
		"26": ["podcaster", "Podcaster"],
		"27": ["reviewedAuthor", "Reviewed Author"],
		"28": ["cosponsor", "Cosponsor"],
		"29": ["bookAuthor", "Book Author"]
	},
	"fields": {
		"1": ["url", "url", true],
		"2": ["rights", "rights", true],
		"3": ["series", "series", true],
		"4": ["volume", "volume", true],
		"5": ["issue", "issue", true],
		"6": ["edition", "edition", true],
		"7": ["place", "place", true],
		"8": ["publisher", "publisher", true],
		"10": ["pages", "pages", true],
		"11": ["ISBN", "ISBN", true],
		"12": ["publicationTitle", "publicationTitle", true],
		"13": ["ISSN", "ISSN", true],
		"14": ["date", "date", true],
		"15": ["section", "section", true],
		"18": ["callNumber", "callNumber", true],
		"19": ["archiveLocation", "archiveLocation", true],
		"21": ["distributor", "distributor", false],
		"22": ["extra", "extra", true],
		"25": ["journalAbbreviation", "journalAbbreviation", true],
		"26": ["DOI", "DOI", true],
		"27": ["accessDate", "accessDate", true],
		"28": ["seriesTitle", "seriesTitle", true],
		"29": ["seriesText", "seriesText", true],
		"30": ["seriesNumber", "seriesNumber", true],
		"31": ["institution", "institution", false],
		"32": ["reportType", "reportType", false],
		"36": ["code", "code", true],
		"40": ["session", "session", true],
		"41": ["legislativeBody", "legislativeBody", true],
		"42": ["history", "history", true],
		"43": ["reporter", "reporter", true],
		"44": ["court", "court", true],
		"45": ["numberOfVolumes", "numberOfVolumes", true],
		"46": ["committee", "committee", true],
		"48": ["assignee", "assignee", true],
		"50": ["patentNumber", "patentNumber", false],
		"51": ["priorityNumbers", "priorityNumbers", true],
		"52": ["issueDate", "issueDate", false],
		"53": ["references", "references", true],
		"54": ["legalStatus", "legalStatus", true],
		"55": ["codeNumber", "codeNumber", true],
		"59": ["artworkMedium", "artworkMedium", false],
		"60": ["number", "number", true],
		"61": ["artworkSize", "artworkSize", true],
		"62": ["libraryCatalog", "libraryCatalog", true],
		"63": ["videoRecordingFormat", "videoRecordingFormat", false],
		"64": ["interviewMedium", "interviewMedium", false],
		"65": ["letterType", "letterType", false],
		"66": ["manuscriptType", "manuscriptType", false],
		"67": ["mapType", "mapType", false],
		"68": ["scale", "scale", true],
		"69": ["thesisType", "thesisType", false],
		"70": ["websiteType", "websiteType", false],
		"71": ["audioRecordingFormat", "audioRecordingFormat", false],
		"72": ["label", "label", false],
		"74": ["presentationType", "presentationType", false],
		"75": ["meetingName", "meetingName", true],
		"76": ["studio", "studio", false],
		"77": ["runningTime", "runningTime", true],
		"78": ["network", "network", false],
		"79": ["postType", "postType", false],
		"80": ["audioFileType", "audioFileType", false],
		"81": ["versionNumber", "versionNumber", true],
		"82": ["system", "system", true],
		"83": ["company", "company", false],
		"84": ["conferenceName", "conferenceName", true],
		"85": ["encyclopediaTitle", "encyclopediaTitle", false],
		"86": ["dictionaryTitle", "dictionaryTitle", false],
		"87": ["language", "language", true],
		"88": ["programmingLanguage", "programmingLanguage", true],
		"89": ["university", "university", false],
		"90": ["abstractNote", "abstractNote", true],
		"91": ["websiteTitle", "websiteTitle", false],
		"92": ["reportNumber", "reportNumber", false],
		"93": ["billNumber", "billNumber", false],
		"94": ["codeVolume", "codeVolume", false],
		"95": ["codePages", "codePages", false],
		"96": ["dateDecided", "dateDecided", false],
		"97": ["reporterVolume", "reporterVolume", false],
		"98": ["firstPage", "firstPage", false],
		"99": ["documentNumber", "documentNumber", false],
		"100": ["dateEnacted", "dateEnacted", false],
		"101": ["publicLawNumber", "publicLawNumber", false],
		"102": ["country", "country", true],
		"103": ["applicationNumber", "applicationNumber", true],
		"104": ["forumTitle", "forumTitle", false],
		"105": ["episodeNumber", "episodeNumber", false],
		"107": ["blogTitle", "blogTitle", false],
		"108": ["type", "type", true],
		"109": ["medium", "medium", true],
		"110": ["title", "title", true],
		"111": ["caseName", "caseName", false],
		"112": ["nameOfAct", "nameOfAct", false],
		"113": ["subject", "subject", false],
		"114": ["proceedingsTitle", "proceedingsTitle", false],
		"115": ["bookTitle", "bookTitle", false],
		"116": ["shortTitle", "shortTitle", true],
		"117": ["docketNumber", "docketNumber", false],
		"118": ["numPages", "numPages", true],
		"119": ["programTitle", "programTitle", false],
		"120": ["issuingAuthority", "issuingAuthority", true],
		"121": ["filingDate", "filingDate", true],
		"122": ["genre", "genre", false],
		"123": ["archive", "archive", true]
	}
}

if (typeof process === 'object' && process + '' === '[object process]') {
	module.exports = ZOTERO_TYPE_SCHEMA;
}