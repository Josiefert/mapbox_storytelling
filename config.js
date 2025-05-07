var config = {
    style: 'mapbox://styles/fertigje/cmacugc5f003e01s73qe75ns5',
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
    title: 'Black Women and Agency in the U.S. South',
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
            description: 'An analysis of data of economic purchases and geographical movements in the following novels illustrates that black women of the U.S. South actually had more agency than commonly assumed.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            id: 'Their Eyes were Watching God',
            alignment: 'fully',
            hidden: false,
            title: 'Data Overview',
            image: '',
            description: 'In this novel, the data shows...',
            location: {
                center: [-80.567, 28.045], 
                zoom: 8.00,
                pitch: 45.0,
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
            id: 'Their Eyes were Watching God',
            alignment: 'left',
            hidden: false,
            title: 'Economic Example',
            image: '',
            description: '',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
        {
            id: 'Their Eyes were Watching God',
            alignment: 'right',
            hidden: false,
            title: 'Movement Example',
            image: '',
            description: '',
            location: {
                center: [-78.8708289182793, 38.44595742954896],
                zoom: 8.00,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'The Color Purple',
            alignment: 'fully',
            hidden: false,
            title: 'Data Overview',
            image: '',
            description: 'Here, the data says...',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'The Color Purple',
            alignment: 'left',
            hidden: false,
            title: 'Economic Example',
            image: '',
            description: '',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
        {
            id: 'The Color Purple',
            alignment: 'right',
            hidden: false,
            title: 'Movement Example',
            image: '',
            description: '',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
        {
            id: 'Salvage the Bones',
            alignment: 'fully',
            hidden: false,
            title: 'Data Overview',
            image: '',
            description: 'The data from this novel, however, offers a contradicting point. Esch is the only predominant black female character and does not have the economic means or circumstances to make large purchases or travel. This highlights the very real experience of lower-class Black families of the South.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
        {
            id: 'Salvage the Bones',
            alignment: 'left',
            hidden: false,
            title: 'Economic Example',
            image: '',
            description: '',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
        {
            id: 'Salvage the Bones',
            alignment: 'right',
            hidden: false,
            title: 'Movement Example',
            image: '',
            description: '',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
        {
            id: 'Conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Limitations of Data',
            image: '',
            description: 'It is important to note that these are fictional universes and characters, and that their data should not be generalized to represent a singular, universal experience of Black women. ',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
