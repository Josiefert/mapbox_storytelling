var config = {
    style: 'mapbox://styles/fertigje/cmaeffo1a005t01s89kpc4te8',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZmVydGlnamUiLCJhIjoiY205N2szY2U3MDhpZDJqcTM2dWY2MWUxZSJ9.TFgwETgCNev-Gu52yGXZRQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Black Agency in the U.S. South',
    subtitle: 'Economic and Geographical Lenses',
    byline: 'Josie Fertig',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction',
            image: 'assets/istockphoto-139257648-612x612.jpg',
            description: 'An analysis of data of economic purchases and geographical movements in the following novels illustrates that black characters actually had more agency than would be expected.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Eyes1',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes were Watching God: Data Overview',
            image: 'assets/their_eyes.jpeg',
            description: 'In this novel, Janie and Tea Cake make numerous purchases and travel all across Florida. The extent of their economic exchanges, namely in Orlando, and the far distances they cover demonstrate how much agency the two had. This is surprising given that this story take places in the 1930s U.S. South.',
            location: {
                center: [-80.567, 28.045], 
                zoom: 6.00,
                pitch: 40.0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Eyes2',
            alignment: 'left',
            hidden: false,
            title: 'Their Eyes were Watching God: Economic Example',
            image: '',
            description: 'From pages 108-115, in Orlando, Tea Cake purchases groceries, multiple clothing items and jewelry for Janie, and the two go to the movies.',
            location: {
                center: [-81.387, 28.557], 
                zoom: 10.00,
                pitch: 20.00,
                bearing: 5.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Eyes3',
            alignment: 'left',
            hidden: false,
            title: 'Their Eyes were Watching God: Economic Example',
            image: '',
            description: '',
            location: {
                center: [-81.387, 28.557], 
                zoom: 10.00,
                pitch: 20.00,
                bearing: 5.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Eyes4',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes were Watching God: Movement Example',
            image: '',
            description: 'Tea Cake and Janie first meet in Eatonville; go to Jacksonville to marry; move to the Everglades; flee to Palm Beach to escape the hurricane; and finally, return to the muck. After Tea Cake dies, Janie returns to Eatonville alone, which further emphasizes the independence and mobility the black characters had. ',
            location: {
                center: [-80.342, 27.926],
                zoom: 7.00,
                pitch: 20.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Purple1',
            alignment: 'fully',
            hidden: false,
            title: 'The Color Purple: Data Overview',
            image: 'assets/color_purple.jpeg',
            description: 'This novel takes place in the early to mid 20th century, and includes multiple locations, mainly rural Georgia, Tennessee, and West Africa, and follows the progress of Celie through her relationship with Shug and reunion with sister Nettie.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Purple2',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple: Economic Example',
            image: '',
            description: 'Pages 106-108 detail several purchases from Shug (a car; furs, silk, satin, hats; "room full of shoes") which emphasize just how much money she is making from being an entertainer, again contradicting the assumption that black people living in the South at this time would not have such economic capability.  She even has a house in Memphis, where later she and Celie move to and the latter starts her pants business, again demonstrating economic agency and mobility.',
            location: {
                center: [-86.387, 34.156], 
                zoom: 6.00,
                pitch: 20.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Purple3',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple: Economic Example',
            image: '',
            description: '',
            location: {
                center: [-81.387, 28.557], 
                zoom: 10.00,
                pitch: 20.00,
                bearing: 5.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Purple4',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple: Movement Example',
            image: '',
            description: 'Nettie has the most significant movement in this story, travelling from Georgia to New York, to England, then finally to Africa. She returns to her travels once more when she comes back to the U.S. to reunite with Celie.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3.00,
                pitch: 40.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Salvage1',
            alignment: 'right',
            hidden: false,
            title: 'Salvage the Bones: Data Overview',
            image: 'assets/salvage_bones.jpeg',
            description: 'The data from this novel offers a different perspective. This family does not have the economic means or circumstances to make large purchases or travel; in fact, the narrative never leaves from their home or surroundings in southern Mississippi. This novel highlights the very real experience of lower-class Black families of the South.',
            location: {
                center: [-88.565, 30.715], 
                zoom: 7.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Salvage2',
            alignment: 'left',
            hidden: false,
            title: 'Salvage the Bones: Economic Example',
            image: '',
            description: 'The few data points on the map show just how little economic exchanges are made. One of the few occurs on page 28, where Skeetah buys the most expensive bag of dog food and Esch recalls their father once buying the generic. There are also several instances of theft in this novel, further showing their economic hardship.',
            location: {
                center: [-88.565, 30.715], 
                zoom: 9.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Salvage3',
            alignment: 'right',
            hidden: false,
            title: 'Salvage the Bones: Movement Example',
            image: '',
            description: 'Far more movement occurs than economic transactions, but it is predominantly witin the woods surrounding their home at "The Pit." The only other locations they frequent are within their vicinitity, like the basketball court, gym, and gas station. Clearly, they do not have as much agency as other black characters given their poor social class, which is only compounded by their race in the South.',
            location: {
                center: [-88.565, 30.715], 
                zoom: 9.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Conclude',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion: Limitations of Data', 
            image: '',
            description: 'It is important to note that these are fictional universes and characters, and that their data should not be generalized to represent a singular, universal Black experience. While Tea Cake and Janie were able to travel and make purchases, they were also relying on an unstable income and struggling to survive in a hurricane. Shug had a lot of money, but also a complicated love and family life; Nettie may have travelled, but was bound to her missionary duties and cut off from her sister, who all the while was being abused and lied to. Although Esch and her family did not have money nor the ability to travel, they arguably had the closest family bond out of all of these novels. These are the elements which data does not illuminate. That being said, this project and its geographical model provided me with a new, thoughtful approach for visualizing even the smallest details of novels.',
            location: {
                center: [-90.3150946, 38.6605671], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
