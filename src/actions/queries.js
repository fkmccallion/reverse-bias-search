export const fetchResults = query => {

  return (dispatch) => {

    dispatch({ type: 'RESET' })

    fetch("https://api.serpwow.com/live/search?api_key=" + process.env.REACT_APP_SERPWOW_KEY + "&q=" + query.query + "&gl=us&hl=en&location=United+States&google_domain=google.com", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(results3 => {
        dispatch({ type: 'POPULATE_GOOGLE_RESULTS', results3 })
      });

    fetch("https://api.serpwow.com/live/search?api_key=" + process.env.REACT_APP_SERPWOW_KEY + "&q=" + query.query + "&engine=bing&country_code=us&bing_language=en", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(results => {
        dispatch({ type: 'POPULATE_BING_RESULTS', results })
      });

    fetch("https://api.serpwow.com/live/search?api_key=" + process.env.REACT_APP_SERPWOW_KEY + "&q=" + query.query + "&engine=yahoo&country_code=us", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(results2 => {
        dispatch({ type: 'POPULATE_YAHOO_RESULTS', results2 })
      });

    const results = {
      "request_info": {
        "success": true,
        "credits_used": 64,
        "credits_remaining": 36
      },
      "search_metadata": {
        "created_at": "2020-09-21T18:24:58.467Z",
        "processed_at": "2020-09-21T18:25:00.929Z",
        "total_time_taken": 2.46,
        "engine_url": "https://www.bing.com/search?q=peaceful+protesters+or+rioters?&form=QBRE&cc=us&setLang=en",
        "html_url": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful+protesters+or+rioters?&engine=bing&country_code=us&bing_language=en&output=html",
        "json_url": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful+protesters+or+rioters?&engine=bing&country_code=us&bing_language=en&output=json",
        "timing": [
          "global_init - 0ms (total 0ms)",
          "auth_apikey - 15ms (total 15ms)",
          "auth_retrieve_plan - 5ms (total 20ms)",
          "auth_retrieve_credit_usage - 9ms (total 29ms)",
          "processing_invoking_worker - 1ms (total 31ms)",
          "processing_execution_complete - 2462ms (total 2493ms)",
          "auth_credit_usage_reconcile - 10ms (total 2503ms)",
          "global_end - 0ms (total 2503ms)"
        ]
      },
      "search_parameters": {
        "q": "peaceful protesters or rioters?",
        "engine": "bing",
        "country_code": "us",
        "bing_language": "en"
      },
      "search_information": {
        "total_results": 25000000,
        "query_displayed": "peaceful protesters or rioters?"
      },
      "organic_results": [
        {
          "position": 1,
          "title": "About 93% of racial justice protests in the US have been ...",
          "link": "https://www.cnn.com/2020/09/04/us/blm-protests-peaceful-report-trnd/index.html",
          "domain": "www.cnn.com",
          "displayed_link": "https://www.cnn.com/2020/09/04/us/blm-protests-peaceful-report-trnd",
          "snippet": "Sep 05, 2020 · Peaceful racial justice protests took place in more than 2,440 locations across all 50 states and Washington, DC -- violent demonstrations occurred in fewer than 220 locations, according to the ...",
          "news_date": "Sep 05, 2020",
          "engine": "bing",
          "key": 0
        },
        {
          "position": 2,
          "title": "Democrats Whitewash Antifa Rioters as 'Peaceful Protesters'",
          "link": "https://pjmedia.com/news-and-politics/tyler-o-neil/2020/08/04/democrats-continue-whitewash-antifa-rioters-as-peaceful-protesters-n751250",
          "domain": "pjmedia.com",
          "displayed_link": "https://pjmedia.com/news-and-politics/tyler-o-neil/...",
          "snippet": "Aug 04, 2020 · On Tuesday, Democratic senators again whitewashed violent antifa rioters as “peaceful protesters,” demonizing President Donald Trump for “bad-faith nonsense” for daring to speak the truth ...",
          "news_date": "Aug 04, 2020",
          "engine": "bing",
          "key": 2
        },
        {
          "position": 3,
          "title": "Protests and Riots: The Signifant Difference Must Not Be ...",
          "link": "https://www.dailysignal.com/2020/06/19/the-significant-difference-between-protests-and-riots/",
          "domain": "www.dailysignal.com",
          "displayed_link": "https://www.dailysignal.com/2020/06/19/the...",
          "snippet": "Jun 19, 2020 · Organized protests and peaceful demonstrations during the Martin Luther King Jr. era produced tremendous progress for the civil rights movement; the church bombings and other violent actions of ...",
          "news_date": "Jun 19, 2020",
          "engine": "bing",
          "key": 4
        },
        {
          "position": 4,
          "title": "‘Mostly Peaceful’ Riots Narrative Misleading | National Review",
          "link": "https://www.nationalreview.com/2020/09/a-misleading-attempt-to-bolster-the-mostly-peaceful-riots-narrative/",
          "domain": "www.nationalreview.com",
          "displayed_link": "https://www.nationalreview.com/2020/09/a...",
          "snippet": "Sep 08, 2020 · While Kishi and Jones may be surprised that the media is more inclined to cover violent riots than peaceful protests, the people living and working in the neighborhoods ravaged by those riots do ...",
          "news_date": "Sep 08, 2020",
          "engine": "bing",
          "key": 6
        },
        {
          "position": 5,
          "title": "Herman Cain: The Distinction Between Peaceful Protesters ...",
          "link": "https://www.westernjournal.com/herman-cain-distinction-peaceful-protesters-rioters/",
          "domain": "www.westernjournal.com",
          "displayed_link": "https://www.westernjournal.com/herman-cain...",
          "snippet": "Jun 02, 2020 · The problem is that the rioters are often luring the innocent protesters into their mayhem, and that’s making it hard for police to tell the difference in the heat of the moment. Authorities have acknowledged that anarchists and people from the outside were the ones who infiltrated the peaceful protesters and lured them into becoming part of ...",
          "news_date": "Jun 02, 2020",
          "engine": "bing",
          "key": 8
        },
        {
          "position": 6,
          "title": "Biden Claims Trump Attacks 'Peaceful Protesters' in Portland",
          "link": "https://pjmedia.com/election/tyler-o-neil/2020/07/22/as-antifa-terrorizes-portland-biden-claims-trump-is-attacking-peaceful-protesters-n670345",
          "domain": "pjmedia.com",
          "displayed_link": "https://pjmedia.com/election/tyler-o-neil/2020/07/22/as-antifa-terrorizes-portland...",
          "snippet": "Jul 22, 2020 · Seemingly ignoring the 54 straight nights of violent antifa riots in Portland, Joe Biden condemned President Trump for attacking \"peaceful protesters.\"",
          "news_date": "Jul 22, 2020",
          "engine": "bing",
          "key": 10
        },
        {
          "position": 7,
          "title": "Watch: Rioters Use 'Peaceful' Protests as Cover for ...",
          "link": "https://www.breitbart.com/crime/2020/07/21/watch-rioters-use-peaceful-protests-as-cover-for-attacks-on-chicago-police/",
          "domain": "www.breitbart.com",
          "displayed_link": "https://www.breitbart.com/crime/2020/07/21/watch...",
          "snippet": "Jul 22, 2020 · The “peaceful” protesters appeared to move in front of the rioters deliberately, to shield them from the view of the police officers guarding the Columbus statue nearby. The rioters then moved in what police described as “a platoon-like fashion” toward the statue, using the protest banners as cover.",
          "news_date": "Jul 22, 2020",
          "engine": "bing",
          "key": 12
        },
        {
          "position": 8,
          "title": "There Are No Peaceful Protesters In Portland",
          "link": "https://thefederalist.com/2020/07/24/there-are-no-peaceful-protesters-in-portland/",
          "domain": "thefederalist.com",
          "displayed_link": "https://thefederalist.com/2020/07/24/there-are-no-peaceful-protesters-in-portland",
          "snippet": "Jul 24, 2020 · We are approaching day 60 of the violent riots in Portland, Oregon. The media would have you believe that these are peaceful protests highjacked by a handful of violent agitators. That is a lie.",
          "news_date": "Jul 24, 2020",
          "engine": "bing",
          "key": 14
        },
        {
          "position": 9,
          "title": "Media Falsely Claimed Violent Riots Were Peaceful And That ...",
          "link": "https://thefederalist.com/2020/06/02/media-falsely-claimed-violent-riots-were-peaceful-and-that-tear-gas-was-used-against-rioters/",
          "domain": "thefederalist.com",
          "displayed_link": "https://thefederalist.com/2020/06/02/media-falsely...",
          "snippet": "Jun 02, 2020 · “His walk came after riot police and National Guard troops used tear gas and flash grenades to clear a path through a peaceful protest in …",
          "news_date": "Jun 02, 2020",
          "engine": "bing",
          "key": 16
        },
        {
          "position": 10,
          "title": "House bill would block rioters from coronavirus ...",
          "link": "https://www.foxnews.com/politics/house-bill-would-block-rioters-from-coronavirus-unemployment-benefits",
          "domain": "www.foxnews.com",
          "displayed_link": "https://www.foxnews.com/politics/house-bill-would-block-rioters-from-coronavirus...",
          "snippet": "Aug 29, 2020 · The “Support Peaceful Protest Act” would also make rioters “financially liable for the cost of federal policing,” according to the bill, which …",
          "news_date": "Aug 29, 2020",
          "engine": "bing",
          "key": 18
        }
      ],
      "pagination": {
        "current": 1,
        "next": "https://www.bing.com/search?q=peaceful+protesters+or+rioters%3f&cc=us&setLang=en&first=11&FORM=PORE",
        "other_pages": {
          "2": "https://www.bing.com/search?q=peaceful+protesters+or+rioters%3f&cc=us&setLang=en&first=11&FORM=PERE",
          "3": "https://www.bing.com/search?q=peaceful+protesters+or+rioters%3f&cc=us&setLang=en&first=21&FORM=PERE1",
          "4": "https://www.bing.com/search?q=peaceful+protesters+or+rioters%3f&cc=us&setLang=en&first=31&FORM=PERE2",
          "5": "https://www.bing.com/search?q=peaceful+protesters+or+rioters%3f&cc=us&setLang=en&first=41&FORM=PERE3"
        }
      }
    }
    dispatch({ type: 'POPULATE_BING_RESULTS', results })

    const results2 = {
      "request_info": {
        "success": true,
        "credits_used": 64,
        "credits_remaining": 36
      },
      "search_metadata": {
        "created_at": "2020-09-21T18:24:58.620Z",
        "processed_at": "2020-09-21T18:25:00.589Z",
        "total_time_taken": 1.97,
        "engine_url": "https://us.search.yahoo.com/search?guccounter=2&p=peaceful+protesters+or+rioters?",
        "html_url": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful+protesters+or+rioters?&engine=yahoo&country_code=us&output=html",
        "json_url": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful+protesters+or+rioters?&engine=yahoo&country_code=us&output=json",
        "timing": [
          "global_init - 0ms (total 0ms)",
          "auth_apikey - 17ms (total 17ms)",
          "auth_retrieve_plan - 6ms (total 23ms)",
          "auth_retrieve_credit_usage - 10ms (total 34ms)",
          "processing_invoking_worker - 0ms (total 35ms)",
          "processing_execution_complete - 1969ms (total 2004ms)",
          "auth_credit_usage_reconcile - 15ms (total 2020ms)",
          "global_end - 0ms (total 2020ms)"
        ]
      },
      "search_parameters": {
        "q": "peaceful protesters or rioters?",
        "engine": "yahoo",
        "country_code": "us"
      },
      "search_information": {
        "total_results": 26900000,
        "query_displayed": "peaceful protesters or rioters?"
      },
      "organic_results": [
        {
          "position": 1,
          "title": "Democrats Whitewash Antifa Rioters as 'Peaceful Protesters'",
          "link": "https://pjmedia.com/news-and-politics/tyler-o-neil/2020/08/04/democrats-continue-whitewash-antifa-rioters-as-peaceful-protesters-n751250",
          "domain": "pjmedia.com",
          "displayed_link": "pjmedia.com/news-and-politics/tyler-o-neil/2020/... ",
          "snippet": "Aug 04, 2020 ·  On Tuesday, Democratic senators again whitewashed violent antifa rioters as “peaceful protesters,” demonizing President Donald Trump for “bad-faith nonsense” for daring to speak the truth about the... ",
          "engine": "yahoo",
          "key": 1
        },
        {
          "position": 2,
          "title": "Protests and Riots: The Signifant Difference Must Not Be ...",
          "link": "https://www.dailysignal.com/2020/06/19/the-significant-difference-between-protests-and-riots/",
          "domain": "www.dailysignal.com",
          "displayed_link": "www.dailysignal.com/2020/06/19/the-significant... ",
          "snippet": "Jun 19, 2020 ·  Rioters are criminals, peaceful protesters are law abiding citizens. rioters hates themselves and this great country, most are socialist and marxist fools. You have to wonder what type of parents... ",
          "engine": "yahoo",
          "key": 3
        },
        {
          "position": 3,
          "title": "About 93% of racial justice protests in the US have been ...",
          "link": "https://www.cnn.com/2020/09/04/us/blm-protests-peaceful-report-trnd/index.html",
          "domain": "www.cnn.com",
          "displayed_link": "www.cnn.com/2020/09/04/us/blm-protests-peaceful... ",
          "snippet": "Sep 04, 2020 ·  Peaceful racial justice protests took place in more than 2,440 locations across all 50 states and Washington, DC -- violent demonstrations occurred in fewer than 220 locations, according to the... ",
          "engine": "yahoo",
          "key": 5
        },
        {
          "position": 4,
          "title": "Antifa Rioters ‘Embedded Themselves’ Among Peaceful ...",
          "link": "https://www.sgtreport.com/2020/08/antifa-rioters-embedded-themselves-among-peaceful-protesters-to-wreak-havoc-in-richmond/",
          "domain": "www.sgtreport.com",
          "displayed_link": "www.sgtreport.com/2020/08/antifa-rioters... ",
          "snippet": "A group of violent rioters broke away from a peaceful protest march on Sunday, damaging fencing and defacing buildings with paint. When police detained the rioters, they seized various weapons of chaos from the antifa instigators, including spray paint, a hammer, a smoke device, flares, and other incendiary devices. ",
          "engine": "yahoo",
          "key": 7
        },
        {
          "position": 5,
          "title": "Watch: Rioters Use 'Peaceful' Protests as Cover for Attacks ...",
          "link": "https://www.breitbart.com/crime/2020/07/21/watch-rioters-use-peaceful-protests-as-cover-for-attacks-on-chicago-police/",
          "domain": "www.breitbart.com",
          "displayed_link": "www.breitbart.com/crime/2020/07/21/watch-rioters... ",
          "snippet": "The “peaceful” protesters appeared to move in front of the rioters deliberately, to shield them from the view of the police officers guarding the Columbus statue nearby. The rioters then moved in what police described as “a platoon-like fashion” toward the statue, using the protest banners as cover. ",
          "engine": "yahoo",
          "key": 9
        },
        {
          "position": 6,
          "title": "Biden Defends Left Wing Rioters & Looters As \"Peaceful ...",
          "link": "https://www.youtube.com/watch?v=uFtPM5ui8Fs",
          "domain": "www.youtube.com",
          "displayed_link": "www.youtube.com/watch?v=uFtPM5ui8Fs ",
          "snippet": "2020 Democrat presidential candidate Joe Biden defends left wing rioters and looters as “peaceful protesters.” From his speech to a virtual National Guard As... ",
          "engine": "yahoo",
          "key": 11
        },
        {
          "position": 7,
          "title": "There Are No Peaceful Protesters In Portland",
          "link": "https://thefederalist.com/2020/07/24/there-are-no-peaceful-protesters-in-portland/",
          "domain": "thefederalist.com",
          "displayed_link": "thefederalist.com/2020/07/24/there-are-no... ",
          "snippet": "Jul 24, 2020 ·  We are approaching day 60 of the violent riots in Portland, Oregon. The media would have you believe that these are peaceful protests highjacked by a handful of violent agitators. That is a lie. ",
          "engine": "yahoo",
          "key": 13
        },
        {
          "position": 8,
          "title": "House bill would block rioters from coronavirus unemployment ...",
          "link": "https://www.foxnews.com/politics/house-bill-would-block-rioters-from-coronavirus-unemployment-benefits",
          "domain": "www.foxnews.com",
          "displayed_link": "www.foxnews.com/politics/house-bill-would-block...",
          "snippet": "The “Support Peaceful Protest Act” would also make rioters “financially liable for the cost of federal policing,” according to the bill, which is sponsored by U.S. Rep. Jim Banks, R- Ind. ",
          "engine": "yahoo",
          "key": 15
        },
        {
          "position": 9,
          "title": "Media Falsely Claimed Violent Riots Were Peaceful And That ...",
          "link": "https://thefederalist.com/2020/06/02/media-falsely-claimed-violent-riots-were-peaceful-and-that-tear-gas-was-used-against-rioters/",
          "domain": "thefederalist.com",
          "displayed_link": "thefederalist.com/2020/06/02/media-falsely... ",
          "snippet": "Jun 02, 2020 ·  “His walk came after riot police and National Guard troops used tear gas and flash grenades to clear a path through a peaceful protest in a city park,” the New York Times falsely reported ... ",
          "engine": "yahoo",
          "key": 17
        },
        {
          "position": 10,
          "title": "Armed St. Louis protesters broke iron gate, threatened couple ...",
          "link": "https://www.foxnews.com/us/armed-st-louis-rioters-threatened-couple-guns-attorney",
          "domain": "www.foxnews.com",
          "displayed_link": "www.foxnews.com/us/armed-st-louis-rioters...",
          "snippet": "Al Watkins, an attorney for Mark McCloskey, 63, and his 61-year-old wife, Patricia, said the protest was largely peaceful and the pair did not bring their guns outside of the home until two men in ... ",
          "engine": "yahoo",
          "key": 19
        }
      ],
      "pagination": {
        "current": 1,
        "next": "https://search.yahoo.com/search;_ylt=A2KLfSj772hfYrcACLdXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=peaceful+protesters+or+rioters%3F&b=11&pz=10&bct=0&xargs=0",
        "other_pages": {
          "2": "https://search.yahoo.com/search;_ylt=A2KLfSj772hfYrcABLdXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=peaceful+protesters+or+rioters%3F&b=11&pz=10&bct=0&xargs=0",
          "3": "https://search.yahoo.com/search;_ylt=A2KLfSj772hfYrcABbdXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=peaceful+protesters+or+rioters%3F&b=21&pz=10&bct=0&xargs=0",
          "4": "https://search.yahoo.com/search;_ylt=A2KLfSj772hfYrcABrdXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=peaceful+protesters+or+rioters%3F&b=31&pz=10&bct=0&xargs=0",
          "5": "https://search.yahoo.com/search;_ylt=A2KLfSj772hfYrcAB7dXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=peaceful+protesters+or+rioters%3F&b=41&pz=10&bct=0&xargs=0"
        }
      }
    }
    dispatch({ type: 'POPULATE_YAHOO_RESULTS', results2 })

    const results3 = {
      "request_info": {
        "success": true,
        "credits_used": 64,
        "credits_remaining": 36
      },
      "search_metadata": {
        "created_at": "2020-09-21T18:24:58.467Z",
        "processed_at": "2020-09-21T18:25:01.140Z",
        "total_time_taken": 2.67,
        "engine_url": "https://www.google.com/search?q=peaceful+protesters+or+rioters?&gl=us&hl=en&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw",
        "html_url": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful+protesters+or+rioters?&gl=us&hl=en&location=United+States&google_domain=google.com&engine=google&output=html",
        "json_url": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful+protesters+or+rioters?&gl=us&hl=en&location=United+States&google_domain=google.com&engine=google&output=json",
        "location_auto_message": "We have automatically set the 'google_domain', 'gl' and 'hl' parameters to match the supplied location of 'United States'. You can stop this behaviour by setting the 'location_auto' parameter to 'false'.",
        "timing": [
          "global_init - 0ms (total 0ms)",
          "auth_apikey - 22ms (total 22ms)",
          "auth_retrieve_plan - 5ms (total 28ms)",
          "auth_retrieve_credit_usage - 9ms (total 37ms)",
          "processing_invoking_worker - 0ms (total 38ms)",
          "processing_execution_complete - 2673ms (total 2712ms)",
          "auth_credit_usage_reconcile - 8ms (total 2720ms)",
          "global_end - 0ms (total 2720ms)"
        ]
      },
      "search_parameters": {
        "q": "peaceful protesters or rioters?",
        "gl": "us",
        "hl": "en",
        "location": "United States",
        "google_domain": "google.com",
        "engine": "google"
      },
      "search_information": {
        "original_query_yields_zero_results": false,
        "total_results": 27800000,
        "time_taken_displayed": 0.62,
        "query_displayed": "peaceful protesters or rioters?"
      },
      "inline_videos": [
        {
          "title": "The Left has tried to define deadly US riots as 'peaceful' protests",
          "link": "https://www.youtube.com/watch?v=0gwb1VqqVLQ",
          "source": "YouTube",
          "date": "Jun 7, 2020",
          "date_utc": "2020-06-07T12:00:00.000Z",
          "block_position": 1
        },
        {
          "title": "'Peaceful protesters abuse police' amid anarchist BLM riots",
          "link": "https://www.youtube.com/watch?v=HO4IW3rqqgE",
          "source": "YouTube",
          "date": "Sep 9, 2020",
          "date_utc": "2020-09-09T12:00:00.000Z",
          "block_position": 1
        },
        {
          "title": "Kenosha, Portland And More: How Protests Become Riots ...",
          "link": "https://www.youtube.com/watch?v=2xZ7oC8u7I4",
          "source": "YouTube",
          "date": "Jun 12, 2020",
          "date_utc": "2020-06-12T12:00:00.000Z",
          "block_position": 1
        }
      ],
      "related_searches": [
        {
          "query": "violent protests",
          "link": "https://www.google.com/search?gl=us&hl=en&q=violent+protests&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoAHoECAsQAQ"
        },
        {
          "query": "riots in america",
          "link": "https://www.google.com/search?gl=us&hl=en&q=riots+in+america&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoAXoECAsQAg"
        },
        {
          "query": "riots today",
          "link": "https://www.google.com/search?gl=us&hl=en&q=riots+today&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoAnoECAsQAw"
        },
        {
          "query": "how many peaceful protests turn violent",
          "link": "https://www.google.com/search?gl=us&hl=en&q=how+many+peaceful+protests+turn+violent&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoA3oECAsQBA"
        },
        {
          "query": "protest vs riot definition",
          "link": "https://www.google.com/search?gl=us&hl=en&q=protest+vs+riot+definition&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoBHoECAsQBQ"
        },
        {
          "query": "minneapolis riots",
          "link": "https://www.google.com/search?gl=us&hl=en&q=minneapolis+riots&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoBXoECAsQBg"
        },
        {
          "query": "riots last night",
          "link": "https://www.google.com/search?gl=us&hl=en&q=riots+last+night&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoBnoECAsQBw"
        },
        {
          "query": "protests, riots",
          "link": "https://www.google.com/search?gl=us&hl=en&q=protests,+riots&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ1QIoB3oECAsQCA"
        }
      ],
      "related_questions": [
        {
          "question": "What is considered a peaceful protest?",
          "answer": "A peaceful protest, also known as nonviolent resistance or nonviolent action, is the act of expressing disapproval through a statement or action without the use of violence.",
          "source": {
            "link": "https://study.com/academy/lesson/peaceful-protest-definition-examples.html",
            "displayed_link": "study.com › academy › peaceful-protest-definition-examp...study.com › academy › peaceful-protest-definition-examp...",
            "title": "Peaceful Protest: Definition & Examples - Video & Lesson Transcript ..."
          },
          "search": {
            "link": "https://www.google.com/search?gl=us&hl=en&q=What+is+considered+a+peaceful+protest%3F&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQzmd6BAgMEAw",
            "title": "What is considered a peaceful protest?"
          },
          "block_position": 4
        },
        {
          "question": "What are some examples of peaceful protest?",
          "answer": "13 Peaceful Protests and Whether They Worked. Cherokee Indian Resistance to Forced Relocation (1838) ... Gandhi's Salt March (1930) ... The White Rose Resistance (1942–1943) ... The Montgomery Bus Boycott (1955–1956) ... The Kent State Demonstrations (1970) ... The Tree Sitters of Pureora (1978) ... Tiananmen Square Protests (1989) ... The Lust Lady Strike of San Francisco (1997)",
          "source": {
            "link": "https://www.mentalfloss.com/article/29040/13-peaceful-protests-and-whether-they-worked",
            "displayed_link": "www.mentalfloss.com › article › 13-peaceful-protests-and...www.mentalfloss.com › article › 13-peaceful-protests-and...",
            "title": "13 Peaceful Protests and Whether They Worked | Mental Floss"
          },
          "search": {
            "link": "https://www.google.com/search?gl=us&hl=en&q=What+are+some+examples+of+peaceful+protest%3F&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQzmd6BAgMEBg",
            "title": "What are some examples of peaceful protest?"
          },
          "block_position": 4
        },
        {
          "question": "What is the difference between a protest and a riot?",
          "answer": "“What a protest is, is people who are peacefully protesting a cause or an issue and they are letting their voices be heard in the protest or march for the cause that their protesting. A riot is when people take that to another extent and they do damage to property or to people,” said Reverend Charles Harrison.",
          "source": {
            "link": "https://cbs4indy.com/news/the-history-of-protesting-vs-rioting-whats-the-difference-do-they-send-the-message/",
            "displayed_link": "cbs4indy.com › news › the-history-of-protesting-vs-riotin...cbs4indy.com › news › the-history-of-protesting-vs-riotin...",
            "title": "The History of Protesting vs Rioting: What's the difference, do they ..."
          },
          "search": {
            "link": "https://www.google.com/search?gl=us&hl=en&q=What+is+the+difference+between+a+protest+and+a+riot%3F&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQzmd6BAgMECM",
            "title": "What is the difference between a protest and a riot?"
          },
          "block_position": 4
        },
        {
          "question": "What is the point of rioting?",
          "answer": "A prison riot is a large-scale, temporary act of concerted defiance or disorder by a group of prisoners against prison administrators, prison officers, or other groups of prisoners. It is often done to express a grievance, force change or attempt escape.",
          "source": {
            "link": "https://en.wikipedia.org/wiki/Riot",
            "displayed_link": "en.wikipedia.org › wiki › Rioten.wikipedia.org › wiki › Riot",
            "title": "Riot - Wikipedia"
          },
          "search": {
            "link": "https://www.google.com/search?gl=us&hl=en&q=What+is+the+point+of+rioting%3F&sa=X&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQzmd6BAgMEC0",
            "title": "What is the point of rioting?"
          },
          "block_position": 4
        }
      ],
      "pagination": {
        "current": 1,
        "next": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=10&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8NMDegQIDRA_",
        "other_pages": {
          "2": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=10&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRAt",
          "3": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=20&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRAv",
          "4": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=30&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRAx",
          "5": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=40&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRAz",
          "6": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=50&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRA1",
          "7": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=60&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRA3",
          "8": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=70&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRA5",
          "9": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=80&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRA7",
          "10": "https://www.google.com/search?q=peaceful+protesters+or+rioters%3F&gl=us&hl=en&ei=--9oX8LcF77B0PEPlIO5KA&start=90&sa=N&ved=2ahUKEwiCxta-7_rrAhW-IDQIHZRBDgUQ8tMDegQIDRA9"
        },
        "api_pagination": {
          "next": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=2",
          "other_pages": {
            "2": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=2",
            "3": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=3",
            "4": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=4",
            "5": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=5",
            "6": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=6",
            "7": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=7",
            "8": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=8",
            "9": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=9",
            "10": "https://api.serpwow.com/live/search?api_key=***Removed***1&q=peaceful%20protesters%20or%20rioters?&gl=us&hl=en&location=United%20States&google_domain=google.com&engine=google&page=10"
          }
        }
      },
      "organic_results": [
        {
          "position": 1,
          "title": "Riots: the violence is turning many away from supporting BLM",
          "link": "https://www.usatoday.com/story/opinion/2020/08/31/riots-violence-erupting-turning-many-away-blm-and-protests-column/5675343002/",
          "domain": "www.usatoday.com",
          "displayed_link": "www.usatoday.com › story › opinion › 2020/08/31 › ri...",
          "snippet": "Aug 31, 2020 - Jacob Blake's shooting has sparked more rioting and as violence escalates, ... The narrative “buildings burn at peaceful protest” is Orwellian ...",
          "prerender": false,
          "snippet_matched": [
            "rioting",
            "peaceful protest"
          ],
          "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:aQCj4O-dKAUJ:https://www.usatoday.com/story/opinion/2020/08/31/riots-violence-erupting-turning-many-away-blm-and-protests-column/5675343002/+&cd=11&hl=en&ct=clnk&gl=us",
          "block_position": 2,
          "engine": "google",
          "key": 20
        },
        {
          "position": 2,
          "title": "Riot or Rebellion: Why Peaceful Protests Can Become Violent ...",
          "link": "https://news.wttw.com/2020/06/01/riot-or-rebellion-why-peaceful-protests-can-become-violent",
          "domain": "news.wttw.com",
          "displayed_link": "news.wttw.com › 2020/06/01 › riot-or-rebellion-why-p...",
          "snippet": "Jun 1, 2020 - The line between peaceful political protest and chaotic violence can be become blurred in an instant. Activist Jahmal Cole and educator ...",
          "prerender": false,
          "snippet_matched": [
            "peaceful",
            "protest"
          ],
          "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:gDwNowhTiB8J:https://news.wttw.com/2020/06/01/riot-or-rebellion-why-peaceful-protests-can-become-violent+&cd=12&hl=en&ct=clnk&gl=us",
          "block_position": 3,
          "engine": "google",
          "key": 21
        },
        {
          "position": 3,
          "title": "Why Are Peaceful Protests Turning Into Riots? | Psychology ...",
          "link": "https://www.psychologytoday.com/us/blog/laugh-cry-live/202006/why-are-peaceful-protests-turning-riots",
          "domain": "www.psychologytoday.com",
          "displayed_link": "www.psychologytoday.com › blog › laugh-cry-live",
          "snippet": "Jun 2, 2020 - As peaceful protests become violent, lets look at what's happening and why, plus five ideas on what we can do to cast off the systemic racism ...",
          "prerender": false,
          "snippet_matched": [
            "peaceful protests"
          ],
          "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:vjBgBoi2L1MJ:https://www.psychologytoday.com/us/blog/laugh-cry-live/202006/why-are-peaceful-protests-turning-riots+&cd=21&hl=en&ct=clnk&gl=us",
          "block_position": 11,
          "engine": "google",
          "key": 22
        },
        {
          "position": 4,
          "title": "Why Describing the George Floyd Protests As 'Riots' Is So ...",
          "link": "https://time.com/5849163/why-describing-george-floyd-protests-as-riots-is-loaded/",
          "domain": "time.com",
          "displayed_link": "time.com › why-describing-george-floyd-protests-as-riots...",
          "snippet": "But the vast majority of protests have been peaceful. Compared to riot, a word like uprising or rebellion does ...",
          "prerender": false,
          "snippet_matched": [
            "protests",
            "peaceful",
            "riot"
          ],
          "block_position": 12,
          "engine": "google",
          "key": 23
        },
        {
          "position": 5,
          "title": "93% of Black Lives Matter Protests Have Been Peaceful: Report",
          "link": "https://time.com/5886348/report-peaceful-protests/",
          "domain": "time.com",
          "displayed_link": "time.com › U.S. › protests",
          "snippet": "Sep 5, 2020 - The authors define violent demonstrations as including “acts targeting other individuals, property, businesses, other rioting groups or armed ...",
          "prerender": false,
          "snippet_matched": [
            "rioting"
          ],
          "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:xmnZ6IvmwOsJ:https://time.com/5886348/report-peaceful-protests/+&cd=23&hl=en&ct=clnk&gl=us",
          "block_position": 13,
          "engine": "google",
          "key": 24
        },
        {
          "position": 6,
          "title": "Demonstrations & Political Violence in America: New Data for ...",
          "link": "https://acleddata.com/2020/09/03/demonstrations-political-violence-in-america-new-data-for-summer-2020/",
          "domain": "acleddata.com",
          "displayed_link": "acleddata.com › 2020/09/03 › demonstrations-political-...",
          "snippet": "Sep 3, 2020 - Over 10,100 of these — or nearly 95% — involve peaceful protesters. ... [the week following the killing of George Floyd when riots first began to ...",
          "prerender": false,
          "snippet_matched": [
            "peaceful protesters",
            "riots"
          ],
          "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Md2u5i_ZnzYJ:https://acleddata.com/2020/09/03/demonstrations-political-violence-in-america-new-data-for-summer-2020/+&cd=24&hl=en&ct=clnk&gl=us",
          "block_position": 14,
          "engine": "google",
          "key": 25
        },
        {
          "position": 7,
          "title": "Peaceful Protesters With 'Room for Rage' Sympathize With ...",
          "link": "https://www.nytimes.com/2020/07/27/us/protests-divisions-blm.html",
          "domain": "www.nytimes.com",
          "displayed_link": "www.nytimes.com › 2020/07/27 › protests-divisions-blm",
          "snippet": "Jul 29, 2020 - Peaceful Protesters With 'Room for Rage' Sympathize With ... He said “the rioters in the crowd” threw bricks, batteries and rocks at the police.",
          "prerender": false,
          "snippet_matched": [
            "Peaceful Protesters",
            "rioters"
          ],
          "block_position": 15,
          "engine": "google",
          "key": 26
        },
        {
          "position": 8,
          "title": "About 93% of racial justice protests in the US have been ...",
          "link": "https://www.cnn.com/2020/09/04/us/blm-protests-peaceful-report-trnd/index.html",
          "domain": "www.cnn.com",
          "displayed_link": "www.cnn.com › blm-protests-peaceful-report-trnd",
          "snippet": "Sep 4, 2020 - (CNN) About 93% of racial justice protests in the US since the death of George Floyd have been peaceful and nondestructive, according to a ...",
          "prerender": false,
          "snippet_matched": [
            "protests",
            "peaceful"
          ],
          "block_position": 16,
          "engine": "google",
          "key": 27
        },
        {
          "position": 9,
          "title": "Peaceful protest is ineffective. Here's what Biden must do ...",
          "link": "https://www.latimes.com/opinion/story/2020-09-12/why-biden-must-comdemn-rioting-even-if-peaceful-protests-dont-work",
          "domain": "www.latimes.com",
          "displayed_link": "www.latimes.com › opinion › story › why-biden-must-...",
          "snippet": "Sep 12, 2020 - Letters to the Editor: Here's why Joe Biden must condemn rioting, even if peaceful protests don't work. Joe Biden speaks in Wilmington, Del., on ...",
          "prerender": false,
          "snippet_matched": [
            "rioting",
            "peaceful protests"
          ],
          "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:BIC-uVLLU0wJ:https://www.latimes.com/opinion/story/2020-09-12/why-biden-must-comdemn-rioting-even-if-peaceful-protests-dont-work+&cd=27&hl=en&ct=clnk&gl=us",
          "block_position": 17,
          "engine": "google",
          "key": 28
        }
      ]
    }
    dispatch({ type: 'POPULATE_GOOGLE_RESULTS', results3 })

  };

};
