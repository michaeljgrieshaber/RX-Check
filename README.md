# RX-Check

# Project Overview

## Project Name

RX-Check

## Project Description

The site will allow users to search for and get information on medications.

[Link to my site.](https://michaeljgrieshaber.github.io/RX-Check/)

## API and Data Sample

The site will use the openFDA API.
https://open.fda.gov/apis/drug/drugsfda/

JSON snippit:

```JSON{
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
```

## Wireframes

Link to wireframe: https://wireframe.cc/pro/edit/467302
Wireframe image is also in the repo.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

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

| Day      | Deliverable                                       | Status     |
| -------- | ------------------------------------------------- | ---------- |
| 8/29/21  | Work on project approval README                   | complete   |
| 8/30/21  | Get project approved / Begin layout (HTML,CSS,JS) | complete   |
| 8/31/21  | Pseudocode / actual code                          | complete   |
| 9/01/21  | Actual code                                       | complete   |
| 9/02/21  | Actual code / Post-MVP                            | Incomplete |
| 9/03/21  | Presentation                                      | Incomplete |
| 9/04/21+ | Post-MVP                                          | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

https://wireframe.cc/pro/edit/467412

## Timeframes

| Component                   | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML Layout                 |    H     |      3hrs      |     3hrs      |    3hrs     |
| CSS Mobile Layout           |    H     |      3hrs      |     3hrs      |    3hrs     |
| CSS Desktop Layout          |    H     |      3hrs      |     3hrs      |    3hrs     |
| CSS Desktop Layout          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Search feature Brand        |    H     |      3hrs      |     3hrs      |    3hrs     |
| Search feature Generic      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Search feature Usage        |    H     |      3hrs      |     3hrs      |    3hrs     |
| Search feature Side Effect  |    H     |      3hrs      |     3hrs      |    3hrs     |
| Search feature Date         |    H     |      3hrs      |     3hrs      |    3hrs     |
| Search feature Manufacturer |    H     |      3hrs      |     3hrs      |    3hrs     |
| Alert                       |    M     |     1.5hrs     |    0.5hrs     |   0.5hrs    |
| CSS Finishing touches       |    M     |      3hrs      |     0hrs      |    0hrs     |
| Total                       |    H     |    34.5hrs     |    30.5hrs    |   30.5hrs   |

## Code Snippet

This API had a rather long path to get the data I wanted to display. Additionally, the paths didn't seem to get set up the same for some of the medications causing errors when trying to find it.

```
   let textBrand = document.createTextNode(res.data.results[0].patient.drug[0].openfda.brand_name[0] ? res.data.results[0].patient.drug[0].openfda.brand_name[0] : "no data" );
    brand.appendChild(textBrand);

    let textGeneric = document.createTextNode(res.data.results[0].patient.drug[0].openfda.generic_name[0] ? res.data.results[0].patient.drug[0].openfda.generic_name[0] : "no data" );
    generic.appendChild(textGeneric);

    let textIndication = document.createTextNode(res.data.results[0].patient.drug[0].drugindication ? res.data.results[0].patient.drug[0].drugindication : "no data" );
    indication.appendChild(textIndication);

    let textReaction = document.createTextNode(res.data.results[0].patient.reaction[0].reactionmeddrapt ? res.data.results[0].patient.reaction[0].reactionmeddrapt : "no data" );
    reaction.appendChild(textReaction);

    let textManufacturer = document.createTextNode(res.data.results[0].patient.drug[0].openfda.manufacturer_name[0] ? res.data.results[0].patient.drug[0].openfda.manufacturer_name[0] : "no data" );
    manufacturer.appendChild(textManufacturer);
```

## Change Log

| Change                                |                                            Reason                                            |     |     |     |
| ------------------------------------- | :------------------------------------------------------------------------------------------: | :-: | :-: | :-: |
| Removed date medication was avaliable | API had dates but they ended up not being the origional date the medications were avaliable. |
