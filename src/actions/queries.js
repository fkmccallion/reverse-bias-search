export const fetchResults = query => {

  return (dispatch) => {

    dispatch({ type: 'RESET' })

    // fetch("https://api.serpwow.com/live/search?api_key=" + process.env.REACT_APP_SERPWOW_KEY + "&q=" + query.query + "&gl=us&hl=en&location=United+States&google_domain=google.com", {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "GET"
    // })
    //   .then(response => response.json())
    //   .then(results3 => {
    //     dispatch({ type: 'POPULATE_GOOGLE_RESULTS', results3 })
    //   });
    //
    // fetch("https://api.serpwow.com/live/search?api_key=" + process.env.REACT_APP_SERPWOW_KEY + "&q=" + query.query + "&engine=bing&country_code=us&bing_language=en", {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "GET"
    // })
    //   .then(response => response.json())
    //   .then(results => {
    //     dispatch({ type: 'POPULATE_BING_RESULTS', results })
    //   });
    //
    // fetch("https://api.serpwow.com/live/search?api_key=" + process.env.REACT_APP_SERPWOW_KEY + "&q=" + query.query + "&engine=yahoo&country_code=us", {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "GET"
    // })
    //   .then(response => response.json())
    //   .then(results2 => {
    //     dispatch({ type: 'POPULATE_YAHOO_RESULTS', results2 })
    //   });

      const results = {
        "request_info": {
          "success": true,
          "credits_used": 39,
          "credits_remaining": 61
        },
        "search_metadata": {
          "created_at": "2020-09-20T23:51:58.095Z",
          "processed_at": "2020-09-20T23:51:59.148Z",
          "total_time_taken": 1.05,
          "engine_url": "https://www.bing.com/search?q=hunter+biden&form=QBRE",
          "html_url": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter+biden&engine=bing&output=html",
          "json_url": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter+biden&engine=bing&output=json",
          "timing": [
            "global_init - 0ms (total 0ms)",
            "auth_apikey - 2ms (total 2ms)",
            "auth_retrieve_plan - 0ms (total 3ms)",
            "auth_retrieve_credit_usage - 2ms (total 5ms)",
            "processing_invoking_worker - 0ms (total 6ms)",
            "processing_execution_complete - 1053ms (total 1059ms)",
            "auth_credit_usage_reconcile - 1ms (total 1061ms)",
            "global_end - 0ms (total 1061ms)"
          ]
        },
        "search_parameters": {
          "q": "hunter biden",
          "engine": "bing"
        },
        "search_information": {
          "total_results": 7370000,
          "query_displayed": "hunter biden"
        },
        "knowledge_graph": {
          "title": "Hunter Biden",
          "type": "Avvocato americano",
          "type_secondary": "FamousGenericPeople",
          "website": "http://it.wikipedia.org/wiki/Hunter_Biden",
          "description": "Robert Hunter Biden è un avvocato, imprenditore e lobbista statunitense. Secondo figlio dell'ex vicepresidente statunitense Joe Biden, ha co-fondato la Rosemont Seneca Partners, una società di consulenza internazionale. Dal 26 luglio 2006 al 29 gennaio 2009 è stato vicepresidente della National Railroad Passenger Corporation. Fino all'ottobre 2019, ha fatto parte …Dopo la selezione verranno aggiunti nuovi contenuti sopra l'area corrente di focusRobert Hunter Biden è un avvocato, imprenditore e lobbista statunitense. Secondo figlio dell'ex vicepresidente statunitense Joe Biden, ha co-fondato la Rosemont Seneca Partners, una società di consulenza internazionale. Dal 26 luglio 2006 al 29 gennaio 2009 è stato vicepresidente della National Railroad Passenger Corporation. Fino all'ottobre 2019, ha fatto parte del Consiglio di amministrazione della BHR Partners, un fondo di investimento privato cinese da lui co-fondato. Biden è stato membro del consiglio di amministrazione della Burisma Holdings dal 2014 al 2019. Nel 2019, il presidente Donald Trump ha erroneamente affermato che Joe Biden aveva chiesto il licenziamento di un procuratore ucraino che indagava su al fine di proteggere Hunter Biden. Tuttavia, Hunter Biden non era sotto indagine e non ci sono state prove di illeciti commessi da lui in Ucraina. Il presunto tentativo di Trump di esercitare pressioni sul governo ucraino a fini personali per indagare sugli affari di Biden, trattenendo gli aiuti che erano previsti per il governo ucraino, ha innescato l'impeachment a settembre 2019."
        },
        "organic_results": [
          {
            "position": 1,
            "title": "Hunter Biden - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Hunter_Biden",
            "domain": "en.wikipedia.org",
            "displayed_link": "https://en.wikipedia.org/wiki/Hunter_Biden",
            "engine": "bing"
          },
          {
            "position": 2,
            "title": "Hunter Biden - Wikipedia",
            "link": "https://it.wikipedia.org/wiki/Hunter_Biden",
            "domain": "it.wikipedia.org",
            "displayed_link": "https://it.wikipedia.org/wiki/Hunter_Biden",
            "engine": "bing"
          },
          {
            "position": 3,
            "title": "L'affare ucraino che imbarazza la famiglia Biden",
            "link": "https://www.agi.it/estero/figlio_biden_ucraina_trump-6258228/news/2019-09-28/",
            "domain": "www.agi.it",
            "displayed_link": "https://www.agi.it/estero/figlio_biden_ucraina_trump-6258228/news/2019-09-28",
            "snippet": "Hunter Biden entrò nel consiglio d'amministrazione della Burisma Holdings, compagnia ucraina del gas, nel maggio 2014, con uno stipendio di 50 mila dollari al mese. Il figlio di Biden venne scelto...",
            "engine": "bing"
          },
          {
            "position": 4,
            "title": "Hunter Biden: 5 Fast Facts You Need to Know | …",
            "link": "https://heavy.com/news/2019/09/hunter-biden/",
            "domain": "heavy.com",
            "displayed_link": "https://heavy.com/news/2019/09/hunter-biden",
            "snippet": "25/09/2019 · Hunter Biden, Joe Biden’s son, has led a dramatic life that started with youthful tragedy: He survived a car crash that killed his mother and sister as a child, underwent a rocky divorce, lost his...",
            "news_date": "25/09/2019",
            "engine": "bing"
          },
          {
            "position": 5,
            "title": "Hunter Biden Offered D.C. Access to Chinese …",
            "link": "https://freebeacon.com/2020-election/hunter-biden-offered-d-c-access-to-chinese-company-in-exchange-for-investments/",
            "domain": "freebeacon.com",
            "displayed_link": "https://freebeacon.com/2020-election/hunter-biden-offered-d-c-access-to-chinese...",
            "snippet": "2 giorni fa · Hunter Biden touted his family’s political clout to solicit a $5 million investment from China for his U.S.-based financial advisory firm, according to a court filing by a white-collar convict who...",
            "news_date": "2 giorni fa",
            "engine": "bing"
          },
          {
            "position": 6,
            "title": "Hunter Biden Helped Buy Out Michigan Company …",
            "link": "https://www.breitbart.com/politics/2020/09/09/hunter-biden-chinese-firm-helped-buy-out-michigan-company-creating-jobs-in-china/",
            "domain": "www.breitbart.com",
            "displayed_link": "https://www.breitbart.com/politics/2020/09/09/hunter-biden-chinese...",
            "snippet": "10/09/2020 · BHR, with Hunter Biden on the board of directors and Devon Archer as the vice chairman and Investment Committee member, engaged in a series of financial deals that served the strategic interests of Beijing. In one of their first deals, the firm took an ownership stake in China General Nuclear Power Corporation (CGN), a nuclear energy company.",
            "news_date": "10/09/2020",
            "engine": "bing"
          },
          {
            "position": 7,
            "title": "Hunter Biden's MASSIVE Chinese Cash Dump | …",
            "link": "https://www.youtube.com/watch?v=N4myDwN30Hk",
            "domain": "www.youtube.com",
            "displayed_link": "https://www.youtube.com/watch?v=N4myDwN30Hk",
            "snippet": "31/08/2020 · Full \"Riding the Dragon\" documentary is available now, exclusive to BlazeTV. Become a subscriber and watch now: https://www.blazetv.com/dragon SYNOPSIS: Vice...",
            "news_date": "31/08/2020",
            "engine": "bing"
          },
          {
            "position": 8,
            "title": "Hunter Biden's deals 'served' China and Chinese …",
            "link": "https://nypost.com/2020/09/03/new-film-sheds-light-on-hunter-bidens-deals-with-china/",
            "domain": "nypost.com",
            "displayed_link": "https://nypost.com/2020/09/03/new-film-sheds-light-on-hunter-bidens...",
            "snippet": "04/09/2020 · Hunter Biden’s business dealings in China served the “strategic interests” of the country’s communist government and military — and may have imperiled American national security, claims a …",
            "news_date": "04/09/2020",
            "engine": "bing"
          },
          {
            "position": 9,
            "title": "Neilia Hunter - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Neilia_Hunter_Biden",
            "domain": "en.wikipedia.org",
            "displayed_link": "https://en.wikipedia.org/wiki/Neilia_Hunter_Biden",
            "snippet": "Neilia Hunter Biden (July 28, 1942 – December 18, 1972) was an American educator. She was the first wife of U.S. senator and former vice president Joe Biden and mother of Hunter, Beau and Naomi.",
            "engine": "bing"
          },
          {
            "position": 10,
            "title": "What Hunter Biden did on the board of Ukrainian …",
            "link": "https://www.reuters.com/article/us-hunter-biden-ukraine-idUSKBN1WX1P7",
            "domain": "www.reuters.com",
            "displayed_link": "https://www.reuters.com/article/us-hunter-biden-ukraine-idUSKBN1WX1P7",
            "snippet": "18/10/2019 · Hunter Biden, 49 years old, has denied wrongdoing. In a public statement on Oct 13, his lawyer George Mesires said: “Despite extensive scrutiny, …",
            "news_date": "18/10/2019",
            "engine": "bing"
          }
        ],
        "pagination": {
          "current": 1,
          "next": "https://www.bing.com/search?q=hunter+biden&first=11&FORM=PORE",
          "other_pages": {
            "2": "https://www.bing.com/search?q=hunter+biden&first=11&FORM=PERE",
            "3": "https://www.bing.com/search?q=hunter+biden&first=21&FORM=PERE1",
            "4": "https://www.bing.com/search?q=hunter+biden&first=31&FORM=PERE2",
            "5": "https://www.bing.com/search?q=hunter+biden&first=41&FORM=PERE3"
          }
        }
      }
      dispatch({ type: 'POPULATE_BING_RESULTS', results })

      const results2 = {
        "request_info": {
          "success": true,
          "credits_used": 39,
          "credits_remaining": 61
        },
        "search_metadata": {
          "created_at": "2020-09-20T23:51:58.094Z",
          "processed_at": "2020-09-20T23:52:00.030Z",
          "total_time_taken": 1.94,
          "engine_url": "https://search.yahoo.com/search?guccounter=2&p=hunter+biden",
          "html_url": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter+biden&engine=yahoo&output=html",
          "json_url": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter+biden&engine=yahoo&output=json",
          "timing": [
            "global_init - 0ms (total 0ms)",
            "auth_apikey - 2ms (total 2ms)",
            "auth_retrieve_plan - 0ms (total 2ms)",
            "auth_retrieve_credit_usage - 2ms (total 5ms)",
            "processing_invoking_worker - 0ms (total 5ms)",
            "processing_execution_complete - 1936ms (total 1941ms)",
            "auth_credit_usage_reconcile - 2ms (total 1944ms)",
            "global_end - 0ms (total 1944ms)"
          ]
        },
        "search_parameters": {
          "q": "hunter biden",
          "engine": "yahoo"
        },
        "search_information": {
          "total_results": 15600000,
          "query_displayed": "hunter biden"
        },
        "organic_results": [
          {
            "position": 1,
            "title": "Hunter Biden - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Hunter_Biden",
            "domain": "en.wikipedia.org",
            "displayed_link": "en.wikipedia.org/wiki/Hunter_Biden ",
            "snippet": "Robert Hunter Biden (born February 4, 1970) is an American lawyer and investment advisor who is the second son of former U.S. Vice President Joe Biden. He is a founding partner of Rosemont Seneca Partners, an investment and advisory firm. Biden served on the board of Burisma Holdings, a major Ukrainian natural gas producer, from 2014 to 2019. ",
            "engine": "yahoo"
          },
          {
            "position": 2,
            "title": "Hunter Biden: 5 Fast Facts You Need to Know | Heavy.com",
            "link": "https://heavy.com/news/2019/09/hunter-biden/",
            "domain": "heavy.com",
            "displayed_link": "heavy.com/news/2019/09/hunter-biden ",
            "engine": "yahoo"
          },
          {
            "position": 3,
            "title": "Hunter Biden got $450,00 DC tax lien 'resolved' within days ...",
            "link": "https://nypost.com/2020/08/10/hunter-biden-got-45000-dc-tax-lien-resolved-within-days-report/",
            "domain": "nypost.com",
            "displayed_link": "nypost.com/2020/08/10/hunter-biden-got-45000-dc... ",
            "snippet": "Aug 10, 2020 ·  Before the pandemic, Senate Republicans had been preparing to investigate Hunter Biden’s job on the board of notoriously corrupt Ukrainian gas company Burisma Holdings, for which he was paid... Other articles from nypost.com ",
            "engine": "yahoo"
          },
          {
            "position": 4,
            "title": "Hunter Biden scandals explained: Ukraine, China, drug history ...",
            "link": "https://www.foxnews.com/politics/hunter-bidens-controversies-explained",
            "domain": "www.foxnews.com",
            "displayed_link": "www.foxnews.com/politics/hunter-bidens...",
            "snippet": "Hunter Biden, son of 2020 democratic presidential candidate, Joe Biden, has faced many scandals. Starting in 2008, with his dealings in Delaware, and ending with his love child last year, young... ",
            "engine": "yahoo"
          },
          {
            "position": 5,
            "title": "Hunter Biden and former stripper reach deal in child support case",
            "link": "https://pagesix.com/2020/03/11/hunter-biden-and-former-stripper-reach-deal-in-child-support-case/",
            "domain": "pagesix.com",
            "displayed_link": "pagesix.com/2020/03/11/hunter-biden-and-former... ",
            "snippet": "Mar 11, 2020 ·  Hunter Biden AP Hunter Biden and the former stripper suing him for child support reached a settlement Wednesday — shortly after an Arkansas judge scrapped his request to delay a court appearance... ",
            "engine": "yahoo"
          },
          {
            "position": 6,
            "title": "Hunter Biden Hit With $450K Tax Lien, Is Resolved Despite ‘No ...",
            "link": "https://www.dailywire.com/news/hunter-biden-hit-with-450k-tax-lien-is-resolved-despite-no-discernible-income-biden-campaign-silent-report",
            "domain": "www.dailywire.com",
            "displayed_link": "www.dailywire.com/news/hunter-biden-hit-with-450... ",
            "snippet": "Aug 08, 2020 ·  Presumptive Democratic presidential nominee Joe Biden’s son, Hunter Biden, was reportedly hit with a $450,000 tax lien last month, and paid it off within just a few days despite having “no discernible income.” The report from The Washington Free Beacon notes that Hunter Biden told a judge in a paternity case that he was broke and unemployed. ",
            "engine": "yahoo"
          },
          {
            "position": 7,
            "title": "Hunter Biden file: A brief Navy career - Washington Times",
            "link": "https://www.washingtontimes.com/news/2019/dec/30/hunter-biden-file-brief-navy-career/",
            "domain": "www.washingtontimes.com",
            "displayed_link": "www.washingtontimes.com/news/2019/dec/30/hunter... ",
            "snippet": "Dec 30, 2019 ·  Because Hunter Biden has become part of his father’s story as he seeks the 2020 Democratic presidential nomination, The Washington Times filed a FOIA request with Navy Personnel Command. His file... ",
            "engine": "yahoo"
          },
          {
            "position": 8,
            "title": "6 facts about Hunter Biden’s business dealings in China",
            "link": "https://nypost.com/2019/10/10/6-facts-about-hunter-bidens-business-dealings-in-china/",
            "domain": "nypost.com",
            "displayed_link": "nypost.com/2019/10/10/6-facts-about-hunter-biden... ",
            "engine": "yahoo"
          },
          {
            "position": 9,
            "title": "Hunter Biden splits from brother Beau's widow Hallie",
            "link": "https://pagesix.com/2019/04/30/hunter-biden-splits-from-brother-beaus-widow-hallie/",
            "domain": "pagesix.com",
            "displayed_link": "pagesix.com/2019/04/30/hunter-biden-splits-from... ",
            "snippet": "Apr 30, 2019 ·  Hunter Biden has split from Hallie Biden — the widow of his late brother, Beau — Page Six has exclusively learned. The breakup comes two years after we first reported that the former in-laws were... ",
            "engine": "yahoo"
          },
          {
            "position": 10,
            "title": "The real reason Hunter Biden split from Beau's widow",
            "link": "https://www.nickiswift.com/152135/the-real-reason-hunter-biden-split-from-beaus-widow/",
            "domain": "www.nickiswift.com",
            "displayed_link": "www.nickiswift.com/152135/the-real-reason-hunter... ",
            "snippet": "May 06, 2019 ·  Former Vice President Joe Biden 's life hit a tragic chord in May 2015, when his eldest son, Beau Biden, died from brain cancer at age 46. Mourning alongside Joe was Beau's younger brother, Hunter... ",
            "engine": "yahoo"
          }
        ],
        "pagination": {
          "current": 1,
          "next": "https://search.yahoo.com/search;_ylt=AwrJ7JUe62dfs7YAwn1XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=hunter+biden&b=11&pz=10&bct=0&xargs=0",
          "other_pages": {
            "2": "https://search.yahoo.com/search;_ylt=AwrJ7JUe62dfs7YAvn1XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=hunter+biden&b=11&pz=10&bct=0&xargs=0",
            "3": "https://search.yahoo.com/search;_ylt=AwrJ7JUe62dfs7YAv31XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=hunter+biden&b=21&pz=10&bct=0&xargs=0",
            "4": "https://search.yahoo.com/search;_ylt=AwrJ7JUe62dfs7YAwH1XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=hunter+biden&b=31&pz=10&bct=0&xargs=0",
            "5": "https://search.yahoo.com/search;_ylt=AwrJ7JUe62dfs7YAwX1XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?p=hunter+biden&b=41&pz=10&bct=0&xargs=0"
          }
        }
      }
      dispatch({ type: 'POPULATE_YAHOO_RESULTS', results2 })

      const results3 = {
        "request_info": {
          "success": true,
          "credits_used": 39,
          "credits_remaining": 61
        },
        "search_metadata": {
          "created_at": "2020-09-20T23:51:58.096Z",
          "processed_at": "2020-09-20T23:52:00.627Z",
          "total_time_taken": 2.53,
          "engine_url": "https://www.google.com/search?q=hunter+biden",
          "html_url": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter+biden&engine=google&output=html",
          "json_url": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter+biden&engine=google&output=json",
          "timing": [
            "global_init - 0ms (total 0ms)",
            "auth_apikey - 3ms (total 3ms)",
            "auth_retrieve_plan - 0ms (total 4ms)",
            "auth_retrieve_credit_usage - 1ms (total 5ms)",
            "processing_invoking_worker - 1ms (total 6ms)",
            "processing_execution_complete - 2531ms (total 2537ms)",
            "auth_credit_usage_reconcile - 3ms (total 2540ms)",
            "global_end - 0ms (total 2540ms)"
          ]
        },
        "search_parameters": {
          "q": "hunter biden",
          "engine": "google"
        },
        "search_information": {
          "original_query_yields_zero_results": false,
          "total_results": 18100000,
          "time_taken_displayed": 0.48,
          "query_displayed": "hunter biden"
        },
        "inline_videos": [
          {
            "title": "Hunter Biden paid off $450000 tax lien in 6 days: Report",
            "link": "https://www.youtube.com/watch?v=gCdK_RVW694",
            "source": "YouTube",
            "date": "Aug 11, 2020",
            "date_utc": "2020-08-11T12:00:00.000Z",
            "block_position": 11
          },
          {
            "title": "WHERE IS HUNTER?: Court Records Show NEW DETAILS ...",
            "link": "https://www.youtube.com/watch?v=PmV23Vem1Hk",
            "source": "YouTube",
            "date": "Jan 8, 2020",
            "date_utc": "2020-01-08T12:00:00.000Z",
            "block_position": 11
          },
          {
            "title": "Hunter Biden on relationship with his dad, addiction battle l ...",
            "link": "https://www.youtube.com/watch?v=vfb9FIpobL4",
            "source": "YouTube",
            "date": "Oct 15, 2019",
            "date_utc": "2019-10-15T12:00:00.000Z",
            "block_position": 11
          }
        ],
        "knowledge_graph": {
          "title": "Hunter Biden",
          "type": "American lawyer",
          "source": {
            "name": "Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Hunter_Biden"
          },
          "description": "Robert Hunter Biden is an American lawyer and investment advisor who is the second son of former U.S. Vice President Joe Biden. He is a founding partner of Rosemont Seneca Partners, an investment and advisory firm.",
          "born": "February 4, 1970 (age 50 years), Wilmington, DE",
          "spouse": [
            {
              "name": "Melissa Cohen",
              "link": "https://www.google.com/search?q=Melissa+Cohen&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivPUeLVT9c3NMwwjq80tEhO0ZLITrbSL0jNL8hJBVJFxfl5VsUF-aXFqYtYeX1TczKLixMVnPMzUvN2sDICADRnVoBKAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQmxMoATAiegQIChAD"
            },
            {
              "name": "Kathleen Biden",
              "link": "https://www.google.com/search?q=Kathleen+Biden&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivPUQKzy4qzCnKMtCSyk630C1LzC3JSgVRRcX6eVXFBfmlx6iJWPu_Ekoyc1NQ8BafMlNS8HayMAJ-dTd9IAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQmxMoAjAiegQIChAE"
            }
          ],
          "children": [
            {
              "name": "Finnegan Biden",
              "link": "https://www.google.com/search?q=Finnegan+Biden&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivPUQKzy4qziuKNtaSyk630C1LzC3JSgVRRcX6eVXJGZk5KUWreIlY-t8y8vNT0xDwFp8yU1LwdrIwAnvPq5EoAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQmxMoATAhegQIDRAD"
            },
            {
              "name": "Maisy Biden",
              "link": "https://www.google.com/search?q=Maisy+Biden&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivPUQKzy4qzio0KtKSyk630C1LzC3JSgVRRcX6eVXJGZk5KUWreIlZu38TM4koFp8yU1LwdrIwAwsLLI0cAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQmxMoAjAhegQIDRAE"
            },
            {
              "name": "Naomi Biden",
              "link": "https://www.google.com/search?q=Naomi+Biden&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivPUQKzy4qzispytaSyk630C1LzC3JSgVRRcX6eVXJGZk5KUWreIlZuv8T83EwFp8yU1LwdrIwAMcxmLkcAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQmxMoAzAhegQIDRAF"
            }
          ],
          "known_attributes": [
            {
              "attribute": "kc:/people/person:born",
              "value": "February 4, 1970 (age 50 years), Wilmington, DE",
              "name": "Born",
              "link": "https://www.google.com/search?q=hunter+biden+born&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivP0RLLTrbSL0jNL8hJBVJFxfl5Vkn5RXmLWAUzSvNKUosUkjJTUvMUQGIA25jYyToAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ6BMoADAdegQIBhAC"
            },
            {
              "attribute": "kc:/people/person:children",
              "value": "Finnegan Biden, Maisy Biden, Naomi Biden",
              "name": "Children",
              "link": "https://www.google.com/search?q=hunter+biden+children&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivP0ZLKTrbSL0jNL8hJBVJFxfl5VskZmTkpRal5i1hFM0rzSlKLFJIyU1LzFGDiAMtGpYhCAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ6BMoADAhegQIDRAC"
            },
            {
              "attribute": "kc:/people/person:spouse",
              "value": "Melissa Cohen (m. 2019), Kathleen Biden (m. 1993–2017)",
              "name": "Spouse",
              "link": "https://www.google.com/search?q=hunter+biden+spouse&stick=H4sIAAAAAAAAAOPgE-LSz9U3MMnKzivP0ZLITrbSL0jNL8hJBVJFxfl5VsUF-aXFqYtYhTNK80pSixSSMlNS8xQgogDd4H_1PgAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ6BMoADAiegQIChAC"
            },
            {
              "attribute": "kc:/people/person:sideways",
              "name": "View 15+ more",
              "value": "View 15+ more",
              "link": "https://www.google.com/search?q=Hunter+Biden&stick=H4sIAAAAAAAAAONgFuLSz9U3MMnKzivPUUJia0llJ1vpF6TmF-SkAqmi4vw8q-LMlNTyxMriRaw8HqV5JalFCk5AkbwdrIwANFYNj0gAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQzTooATAjegQICBAC"
            },
            {
              "attribute": "ss:/webfacts:year_of_servic",
              "value": "2013–2014",
              "name": "Years of service",
              "link": "https://www.google.com/search?q=hunter+biden+years+of+service&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ6BMoADAeegQIBRAC"
            },
            {
              "attribute": "ss:/webfacts:branchservic",
              "value": "United States Navy",
              "name": "Branch/service",
              "link": "https://www.google.com/search?q=hunter+biden+branch/service&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ6BMoADAfegQIBxAC"
            },
            {
              "attribute": "ss:/webfacts:domest_partner",
              "value": "Hallie Biden (2016–2018)",
              "name": "Domestic partner",
              "link": "https://www.google.com/search?q=hunter+biden+domestic+partner&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ6BMoADAgegQIDBAC"
            }
          ],
          "people_also_search_for": [
            {
              "name": "Beau Biden was Hunter Biden's brother.",
              "images": [
                "data:image/jpeg;base64,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"
              ],
              "link": "https://www.google.com/search?q=Beau+Biden&stick=H4sIAAAAAAAAAONgFuLSz9U3MMnKzivPUQKzjczKis3jtfgCUouK8_OCM1NSyxMrixexcjmlJpYqOAH5eTtYGQGrU3aJOgAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQxA0wI3oECAgQBQ",
              "extra": "Brother"
            },
            {
              "name": "Ashley Biden is Hunter Biden's sister.",
              "images": [
                "data:image/jpeg;base64,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"
              ],
              "link": "https://www.google.com/search?q=Ashley+Biden&stick=H4sIAAAAAAAAAONgFuLSz9U3MMnKzivPUYKyzbONK7T4AlKLivPzgjNTUssTK4sXsfI4FmfkpFYqOAFF8nawMgIAoL1uCTwAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQxA0wI3oECAgQBw",
              "extra": "Sister"
            },
            {
              "name": "Melissa Cohen",
              "images": [
                "data:image/jpeg;base64,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"
              ],
              "link": "https://www.google.com/search?q=Melissa+Cohen&stick=H4sIAAAAAAAAAONgFuLSz9U3MMnKzivPUeLVT9c3NMwwjq80tEhO0eILSC0qzs8LzkxJLU-sLF7EyuubmpNZXJyo4JyfkZq3g5URAG8Lhy5AAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQxA0wI3oECAgQCQ"
            },
            {
              "name": "Joe Biden is Hunter Biden's father.",
              "images": [
                "data:image/jpeg;base64,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"
              ],
              "link": "https://www.google.com/search?q=Joe+Biden&stick=H4sIAAAAAAAAAONgFuLSz9U3MMnKzivPUeIEsQ2N0iuMtPgCUouK8_OCM1NSyxMrixexcnrlpyo4Abl5O1gZAXF02aQ4AAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQxA0wI3oECAgQCw",
              "extra": "Father"
            },
            {
              "name": "Hunter Biden and Hallie Biden have been partners since 2016.",
              "images": [
                "data:image/jpeg;base64,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"
              ],
              "link": "https://www.google.com/search?q=Hallie+Biden&stick=H4sIAAAAAAAAAONgFuLSz9U3MMnKzivPUQKzs8wssssLtPgCUouK8_OCM1NSyxMrixex8ngk5uRkpio4AUXydrAyAgCoPEvUPAAAAA&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQxA0wI3oECAgQDQ",
              "extra": "Partner"
            }
          ]
        },
        "ads": [
          {
            "position": 1,
            "block_position": "top",
            "title": "Mentally Unfit To Be President - Biden Is Barely There",
            "link": "https://www.barelytherebiden.com/",
            "tracking_link": "https://www.google.com/aclk?sa=l&ai=DChcSEwje6qzb9vjrAhU18LUKHQDtCuAYABAAGgJxbg&sig=AOD64_21FIc8rLgIhBeMkGLe76_au16hHw&q&adurl",
            "domain": "www.barelytherebiden.com",
            "description": "The Biden-Harris Administration Will Be The Most Progressive In United State's History. Joe And Kamala Are Extreme Radicals. They Will Raise Your Taxes By $4 Trillion Dollars.Paid for by DONALD J. TRUMP FOR PRESIDENT, INC."
          }
        ],
        "related_searches": [
          {
            "query": "hunter biden wife",
            "link": "https://www.google.com/search?q=hunter+biden+wife&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoAHoECCcQAQ"
          },
          {
            "query": "beau biden",
            "link": "https://www.google.com/search?q=beau+biden&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoAXoECCcQAg"
          },
          {
            "query": "hunter biden net worth",
            "link": "https://www.google.com/search?q=hunter+biden+net+worth&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoAnoECCcQAw"
          },
          {
            "query": "kathleen biden",
            "link": "https://www.google.com/search?q=kathleen+biden&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoA3oECCcQBA"
          },
          {
            "query": "hunter biden hallie",
            "link": "https://www.google.com/search?q=hunter+biden+hallie&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoBHoECCcQBQ"
          },
          {
            "query": "hunter biden, burisma",
            "link": "https://www.google.com/search?q=hunter+biden,+burisma&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoBXoECCcQBg"
          },
          {
            "query": "where is hunter biden now",
            "link": "https://www.google.com/search?q=where+is+hunter+biden+now&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoBnoECCcQBw"
          },
          {
            "query": "hunter biden fathers baby",
            "link": "https://www.google.com/search?q=hunter+biden+fathers+baby&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ1QIoB3oECCcQCA"
          }
        ],
        "pagination": {
          "current": 1,
          "next": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=10&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8NMDegQIGxBA",
          "other_pages": {
            "2": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=10&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxAu",
            "3": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=20&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxAw",
            "4": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=30&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxAy",
            "5": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=40&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxA0",
            "6": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=50&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxA2",
            "7": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=60&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxA4",
            "8": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=70&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxA6",
            "9": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=80&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxA8",
            "10": "https://www.google.com/search?q=hunter+biden&ei=HutnX8q5PI-0ggfW_K0g&start=90&sa=N&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQ8tMDegQIGxA-"
          },
          "api_pagination": {
            "next": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=2",
            "other_pages": {
              "2": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=2",
              "3": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=3",
              "4": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=4",
              "5": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=5",
              "6": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=6",
              "7": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=7",
              "8": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=8",
              "9": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=9",
              "10": "https://api.serpwow.com/live/search?api_key=***REMOVED***&q=hunter%20biden&engine=google&page=10"
            }
          }
        },
        "organic_results": [
          {
            "position": 1,
            "title": "Hunter Biden - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Hunter_Biden",
            "domain": "en.wikipedia.org",
            "displayed_link": "en.wikipedia.org › wiki › Hunter_Biden",
            "snippet": "Unit. United States Navy Reserve. Robert Hunter Biden (born February 4, 1970) is an American lawyer and investment advisor who is the second son of former U.S. Vice President Joe Biden. He is a founding partner of Rosemont Seneca Partners, an investment and advisory firm.",
            "prerender": false,
            "snippet_matched": [
              "Hunter Biden",
              "Biden"
            ],
            "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:5CHiyTe0MggJ:https://en.wikipedia.org/wiki/Hunter_Biden+&cd=1&hl=en&ct=clnk&gl=us",
            "related_page_link": "https://www.google.com/search?q=related:https://en.wikipedia.org/wiki/Hunter_Biden+hunter+biden&sa=X&ved=2ahUKEwjKwKbb9vjrAhUPmuAKHVZ-CwQQHzAAegQIBBAH",
            "block_position": 1,
            "engine": "google"
          },
          {
            "position": 2,
            "title": "The life of Hunter Biden, Joe Biden's scandal-plagued middle ...",
            "link": "https://www.businessinsider.com/hunter-biden-life-scandals-ukraine-involvement-with-trump-giuliani-2019-9",
            "domain": "www.businessinsider.com",
            "displayed_link": "www.businessinsider.com › Politics › News",
            "snippet": "Aug 21, 2020 - Hunter Biden, Democratic presidential nominee Joe Biden's middle child, spoke at the Democratic National Convention on its fourth and final ...",
            "prerender": false,
            "snippet_matched": [
              "Hunter Biden"
            ],
            "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:pepe_mc_h7cJ:https://www.businessinsider.com/hunter-biden-life-scandals-ukraine-involvement-with-trump-giuliani-2019-9+&cd=2&hl=en&ct=clnk&gl=us",
            "block_position": 2,
            "engine": "google"
          },
          {
            "position": 3,
            "title": "New evidence makes Hunter Biden's 'business' deals reek ...",
            "link": "https://nypost.com/2020/09/14/new-evidence-makes-hunter-bidens-business-deals-reek-worse-than-ever/",
            "domain": "nypost.com",
            "displayed_link": "nypost.com › 2020/09/14 › new-evidence-makes-hunte...",
            "snippet": "6 days ago - While Joe Biden served as vice president, his son Hunter received offers from foreign governments and oligarchs in areas where the he had ...",
            "prerender": false,
            "snippet_matched": [
              "Biden",
              "Hunter"
            ],
            "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:387Hs2CtERYJ:https://nypost.com/2020/09/14/new-evidence-makes-hunter-bidens-business-deals-reek-worse-than-ever/+&cd=3&hl=en&ct=clnk&gl=us",
            "block_position": 3,
            "engine": "google"
          },
          {
            "position": 4,
            "title": "What Pam Bondi's RNC attacks on Hunter Biden got right ...",
            "link": "https://www.usatoday.com/story/news/politics/2020/08/26/what-pam-bondis-rnc-attacks-hunter-biden-got-right-and-wrong/3441817001/",
            "domain": "www.usatoday.com",
            "displayed_link": "www.usatoday.com › news › politics › 2020/08/26 › w...",
            "snippet": "Aug 26, 2020 - Pam Bondi, the former Florida attorney general, made assertions about Joe Biden's son Hunter, Ukraine and China at the Republican National ...",
            "prerender": false,
            "snippet_matched": [
              "Biden's",
              "Hunter"
            ],
            "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:-3ciE_7f-xMJ:https://www.usatoday.com/story/news/politics/2020/08/26/what-pam-bondis-rnc-attacks-hunter-biden-got-right-and-wrong/3441817001/+&cd=17&hl=en&ct=clnk&gl=us",
            "block_position": 12,
            "engine": "google"
          },
          {
            "position": 5,
            "title": "Who Is Hunter Biden? The Scandals Around Joe Biden's Son",
            "link": "https://www.thecut.com/2020/08/who-is-hunter-biden-the-scandals-around-joe-bidens-son.html",
            "domain": "www.thecut.com",
            "displayed_link": "www.thecut.com › 2020/08 › who-is-hunter-biden-the-sc...",
            "snippet": "Aug 20, 2020 - Hunter Biden, vice president Joe Biden's youngest son, was announced as a surprise speaker for the final night of the DNC. There's a lot of ...",
            "prerender": false,
            "snippet_matched": [
              "Hunter Biden"
            ],
            "block_position": 13,
            "engine": "google"
          },
          {
            "position": 6,
            "title": "Joe Biden son Hunter Biden agrees to temporary child support ...",
            "link": "https://www.cnbc.com/2020/01/27/joe-biden-son-hunter-biden-agrees-to-temporary-child-support-for-child.html",
            "domain": "www.cnbc.com",
            "displayed_link": "www.cnbc.com › 2020/01/27 › joe-biden-son-hunter-bid...",
            "snippet": "Jan 27, 2020 - Hunter Biden, the son of leading Democratic presidential contender Joe Biden, has agreed to pay an undisclosed amount of monthly child ...",
            "prerender": false,
            "snippet_matched": [
              "Hunter Biden"
            ],
            "block_position": 14,
            "engine": "google"
          },
          {
            "position": 7,
            "title": "Will Hunter Biden Jeopardize His Father's Campaign? | The ...",
            "link": "https://www.newyorker.com/magazine/2019/07/08/will-hunter-biden-jeopardize-his-fathers-campaign",
            "domain": "www.newyorker.com",
            "displayed_link": "www.newyorker.com › magazine › 2019/07/08 › will-...",
            "snippet": "Jul 1, 2019 - Biden writes, “I was pretty sure Beau could run for President some day, and, with his brother's help, he could win.” Hunter Biden, who is ...",
            "prerender": false,
            "snippet_matched": [
              "Hunter Biden"
            ],
            "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:QPUVX9l5L0YJ:https://www.newyorker.com/magazine/2019/07/08/will-hunter-biden-jeopardize-his-fathers-campaign+&cd=20&hl=en&ct=clnk&gl=us",
            "block_position": 15,
            "engine": "google"
          },
          {
            "position": 8,
            "title": "Treasury flagged foreign money flowing to Hunter Biden-tied ...",
            "link": "https://justthenews.com/accountability/russia-and-ukraine-scandals/treasury-flagged-foreign-money-flowing-hunter-biden-tied",
            "domain": "justthenews.com",
            "displayed_link": "justthenews.com › russia-and-ukraine-scandals › treasury-...",
            "snippet": "That includes Hunter Biden's controversial addition in spring 2014 to the board of Burisma Holdings, a ...",
            "prerender": false,
            "snippet_matched": [
              "Hunter Biden's"
            ],
            "block_position": 16,
            "engine": "google"
          }
        ]
      }
      dispatch({ type: 'POPULATE_GOOGLE_RESULTS', results3 })

  };

};
