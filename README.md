# RX-Check

# Project Overview

## Project Name

RX-Check

## Project Description

The site will allow users to search for and get information on medications.

## API and Data Sample

The site will use the openFDA API.
https://open.fda.gov/apis/drug/drugsfda/

JSON snippit:
{
    "meta": {
        "disclaimer": "Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service.",
        "terms": "https://open.fda.gov/terms/",
        "license": "https://open.fda.gov/license/",
        "last_updated": "2021-08-04",
        "results": {
            "skip": 0,
            "limit": 1,
            "total": 10190
        }
    },
    "results": [
        {
            "reporttype": "1",
            "safetyreportversion": "4",
            "receivedateformat": "102",
            "primarysource": {
                "reportercountry": "US",
                "qualification": "5"
            },
            "transmissiondateformat": "102",
            "fulfillexpeditecriteria": "1",
            "safetyreportid": "10013586",
            "patient": {
                "patientsex": "1",
                "reaction": [
                    {
                        "reactionmeddraversionpt": "17.1",
                        "reactionmeddrapt": "Arrhythmia",
                        "reactionoutcome": "6"
                    }
                ],
                "drug": [
                    {
                        "drugcharacterization": "1",
                        "medicinalproduct": "SUDAFED",
                        "drugdosageform": "Unspecified",
                        "drugadministrationroute": "048",
                        "actiondrug": "5",
                        "drugrecurreadministration": "3",
                        "activesubstance": {
                            "activesubstancename": "PSEUDOEPHEDRINE HYDROCHLORIDE"
                        },
                        "openfda": {
                            "application_number": [
                                "NDA020021"
                            ],
                            "brand_name": [
                                "SUDAFED 24 HOUR"
                            ],
                            "generic_name": [
                                "PSEUDOEPHEDRINE HYDROCHLORIDE"
                            ],
                            "manufacturer_name": [
                                "Johnson & Johnson Consumer Inc., McNeil Consumer Healthcare Division"
                            ],
                            "product_ndc": [
                                "50580-669"
                            ],
                            "product_type": [
                                "HUMAN OTC DRUG"
                            ],
                            "route": [
                                "ORAL"
                            ],
                            "substance_name": [
                                "PSEUDOEPHEDRINE HYDROCHLORIDE"
                            ],
                            "rxcui": [
                                "1049670",
                                "1049672"
                            ],
                            "spl_id": [
                                "6a06fbd9-c10d-43a4-9a6e-be1720992624"
                            ],
                            "spl_set_id": [
                                "9991599a-b49b-4ea6-a6e1-c05f0c992f71"
                            ],
                            "package_ndc": [
                                "50580-669-10"
                            ],
                            "unii": [
                                "6V9V2RYJ8N"
                            ]
                        }
                    },
                    {
                        "drugcharacterization": "1",
                        "medicinalproduct": "SUDAFED",
                        "drugauthorizationnumb": "020021",
                        "drugdosageform": "Unspecified",
                        "drugadministrationroute": "048",
                        "drugindication": "PRODUCT USED FOR UNKNOWN INDICATION",
                        "actiondrug": "5",
                        "drugrecurreadministration": "3",
                        "activesubstance": {
                            "activesubstancename": "PSEUDOEPHEDRINE HYDROCHLORIDE"
                        },
                        "openfda": {
                            "application_number": [
                                "NDA020021"
                            ],
                            "brand_name": [
                                "SUDAFED 24 HOUR"
                            ],
                            "generic_name": [
                                "PSEUDOEPHEDRINE HYDROCHLORIDE"
                            ],
                            "manufacturer_name": [
                                "Johnson & Johnson Consumer Inc., McNeil Consumer Healthcare Division"
                            ],
                            "product_ndc": [
                                "50580-669"
                            ],
                            "product_type": [
                                "HUMAN OTC DRUG"
                            ],
                            "route": [
                                "ORAL"
                            ],
                            "substance_name": [
                                "PSEUDOEPHEDRINE HYDROCHLORIDE"
                            ],
                            "rxcui": [
                                "1049670",
                                "1049672"
                            ],
                            "spl_id": [
                                "6a06fbd9-c10d-43a4-9a6e-be1720992624"
                            ],
                            "spl_set_id": [
                                "9991599a-b49b-4ea6-a6e1-c05f0c992f71"
                            ],
                            "package_ndc": [
                                "50580-669-10"
                            ],
                            "unii": [
                                "6V9V2RYJ8N"
                            ]
                        }
                    }
                ]
            },
            "serious": "1",
            "reportduplicate": {
                "duplicatesource": "MCNEIL",
                "duplicatenumb": "US-JNJFOC-20140302429"
            },
            "receiptdate": "20140824",
            "receiptdateformat": "102",
            "receiver": {
                "receivertype": "6",
                "receiverorganization": "FDA"
            },
            "companynumb": "US-JNJFOC-20140302429",
            "occurcountry": "US",
            "seriousnessother": "1",
            "duplicate": "1",
            "sender": {
                "sendertype": "2",
                "senderorganization": "FDA-Public Use"
            },
            "receivedate": "20140315",
            "transmissiondate": "20150326",
            "primarysourcecountry": "US"
        }
    ]
}

## Wireframes

Link to wireframe: https://wireframe.cc/pro/edit/467302
Wireframe image is also in the repo.


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find API with accessable and useful data
- Get data on page when searched
- Create search feature
- Design site to look like medication bottle
- Set up breakpoints between desktop and mobile users
- Include warnings so the user seeks medical help instead of relying on site only


#### PostMVP  

- Upgrade with images of medications using additinal API
- Add an on-screen calculator/unit converter
- Create a save/favorite medication section
- Include a section to with recent news on searched medications



## Project Schedule



|  Day | Deliverable | Status
|--- |---| ---|
|8/29/21| Work on project approval README | Incomplete
|8/30/21| Get project approved / Begin layout (HTML,CSS,JS) | Incomplete
|8/31/21| Pseudocode / actual code  | Incomplete
|9/01/21| Actual code | Incomplete
|9/02/21| Actual code / Post-MVP | Incomplete
|9/03/21| Presentation  | Incomplete
|9/04/21+| Post-MVP | Incomplete


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

https://wireframe.cc/pro/edit/467412

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Layout   | H | 3hrs| Xhrs | Xhrs |
| CSS Mobile Layout  | H | 3hrs| Xhrs | Xhrs |
| CSS Desktop Layout  | H | 3hrs| Xhrs | Xhrs |
| CSS Desktop Layout  | H | 3hrs| Xhrs | Xhrs |
| Search feature Brand  | H | 3hrs| Xhrs | Xhrs |
| Search feature Generic  | H | 3hrs| Xhrs | Xhrs |
| Search feature Usage  | H | 3hrs| Xhrs | Xhrs |
| Search feature Side Effect  | H | 3hrs| Xhrs | Xhrs |
| Search feature Date | H | 3hrs| Xhrs | Xhrs |
| Search feature Manufacturer  | H | 3hrs| Xhrs | Xhrs |
| Search feature Manufacturer  | H | 3hrs|Xhrs | Xhrs | 
| Alert  | M | 1.5hrs| Xhrs | Xhrs |
| CSS Finishing touches  | M | 3hrs| Xhrs | Xhrs |
| Total  | H | 37.5hrs| Xhrs | Xhrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 | Change | Reason ||||
| --- | :---: |  :---: | :---: | :---: |
|  | |  



