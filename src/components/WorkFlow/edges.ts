import { MarkerType, type Edge } from '@xyflow/react';

export const initialEdges: Edge[] = [
  {
    id: 'id1-id2',
    source: '1',
    target: '2',
    type: 'straight',
    // label: 'working',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id2-id3',
    source: '2',
    target: '3',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id3-id4',
    source: '3',
    target: '4',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id4-id5',
    source: '4',
    target: '5',
    type: 'straight',
    label: 'For master projects',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [0, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id5-id6',
    source: '5',
    target: '6',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id4-id6',
    source: '4',
    target: '6',
    sourceHandle: 'bottom',
    targetHandle: 'bottom',
    type: 'smoothstep',
    label: 'For high rise',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id6-id7',
    source: '6',
    target: '7',
    type: 'bezier',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id7-id9',
    source: '7',
    target: '9',
    sourceHandle: 'right',
    type: 'smoothstep',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id7-id10',
    source: '7',
    target: '10',
    sourceHandle: 'right',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id9-id11',
    source: '9',
    target: '11',
    sourceHandle: 'right',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id7-id12',
    source: '7',
    target: '12',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id10-id13',
    source: '9',
    target: '13',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id11-id15',
    source: '11',
    target: '15',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id10-id14',
    source: '11',
    target: '14',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id15-id16',
    source: '15',
    target: '16',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id16-id17',
    source: '16',
    target: '17',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id17-id18',
    source: '17',
    target: '18',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id18-id19',
    source: '18',
    target: '19',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id19-id20',
    source: '19',
    target: '20',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id20-id21',
    source: '20',
    target: '21',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id20-id22',
    source: '20',
    target: '22',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id16-id23',
    source: '16',
    target: '23',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id10-id22',
    source: '10',
    target: '22',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id18-id17',
    source: '18',
    target: '17',
    targetHandle: 'left',
    sourceHandle: 'bottom',
    type: 'smoothstep',
    label: 'REJECTED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id6-id24',
    source: '6',
    target: '24',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'bezier',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id24-id25',
    source: '24',
    target: '25',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id25-id26',
    source: '25',
    target: '26',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id26-id27',
    source: '26',
    target: '27',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id27-id28',
    source: '27',
    target: '28',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id28-id29',
    source: '28',
    target: '29',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id30-id31',
    source: '30',
    target: '31',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id31-id32',
    source: '31',
    target: '32',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    label: 'APPROVED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id32-id33',
    source: '32',
    target: '33',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id33-id34',
    source: '33',
    target: '34',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id34-id29',
    source: '34',
    target: '29',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id35-id36',
    source: '35',
    target: '36',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id36-id37',
    source: '36',
    target: '37',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id37-id38',
    source: '37',
    target: '38',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id38-id39',
    source: '38',
    target: '39',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id6-id30',
    source: '6',
    target: '30',
    type: 'bezier',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id6-id35',
    source: '6',
    target: '35',
    type: 'bezier',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id22-id29',
    source: '22',
    target: '29',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id21-id29',
    source: '21',
    target: '29',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id16-id33',
    source: '16',
    target: '33',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id23-id33',
    source: '23',
    target: '33',
    sourceHandle: 'right',
    targetHandle: 'top',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id32-id30',
    source: '32',
    target: '30',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'REJECTED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id31-id30',
    source: '31',
    target: '30',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'REJECTED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id39-id40',
    source: '39',
    target: '40',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id40-id41',
    source: '40',
    target: '41',
    // sourceHandle: 'left',
    // targetHandle: 'right',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id41-id42',
    source: '41',
    target: '42',
    // sourceHandle: 'left',
    // targetHandle: 'right',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id42-id43',
    source: '42',
    target: '43',
    // sourceHandle: 'left',
    // targetHandle: 'right',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id43-id44',
    source: '43',
    target: '44',
    // sourceHandle: 'left',
    // targetHandle: 'right',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id43-id45',
    source: '43',
    target: '45',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id44-id46',
    source: '44',
    target: '46',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id44-id47',
    source: '44',
    target: '47',
    sourceHandle: 'right',
    targetHandle: 'top',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id48-id49',
    source: '48',
    target: '49',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id49-id50',
    source: '49',
    target: '50',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id50-id47',
    source: '50',
    target: '47',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id50-id41',
    source: '50',
    target: '51',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id49-id52',
    source: '49',
    target: '52',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id49-id53',
    source: '49',
    target: '53',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id53-id54',
    source: '53',
    target: '54',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id53-id55',
    source: '53',
    target: '55',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id35-id48',
    source: '35',
    target: '48',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id7-id48',
    source: '7',
    target: '48',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id56-id57',
    source: '56',
    target: '57',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id57-id58',
    source: '57',
    target: '58',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id57-id59',
    source: '57',
    target: '59',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id59-id57',
    source: '59',
    target: '57',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'REJECTED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id59-id60',
    source: '59',
    target: '60',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    label: 'APPROVED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id60-id61',
    source: '60',
    target: '61',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id60-id62',
    source: '60',
    target: '62',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id62-id76',
    source: '62',
    target: '75',
    sourceHandle: 'right',
    targetHandle: 'top',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id39-id63',
    source: '39',
    target: '63',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id63-id65',
    source: '63',
    target: '65',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id63-id64',
    source: '63',
    target: '64',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id64-id66',
    source: '64',
    target: '66',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id66-id67',
    source: '66',
    target: '67',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id67-id69',
    source: '67',
    target: '69',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id69-id70',
    source: '69',
    target: '70',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id69-id71',
    source: '69',
    target: '71',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',
    // label: 'REJECTED',
    // labelBgStyle: {
    //   fill: '#f2f3fa',
    // },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id71-id69',
    source: '71',
    target: '69',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'REJECTED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id72-id69',
    source: '72',
    target: '69',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'REJECTED',
    labelBgStyle: {
      fill: '#f2f3fa',
    },
    labelBgPadding: [10, 0],
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id71-id72',
    source: '71',
    target: '72',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id72-id73',
    source: '72',
    target: '73',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id73-id74',
    source: '73',
    target: '74',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id73-id75',
    source: '73',
    target: '75',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id67-id68',
    source: '67',
    target: '68',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id47-id76',
    source: '47',
    target: '76',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'stright',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id55-id76',
    source: '55',
    target: '76',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'id75-id76',
    source: '75',
    target: '76',
    sourceHandle: 'right',
    targetHandle: 'top',
    type: 'smoothstep',

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
