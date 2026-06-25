import { format } from 'date-fns';

// ---------------- LABEL PLUGIN ----------------
export const timelineLabelPlugin = {
  id: 'timelineLabelPlugin',

  afterDatasetsDraw(chart: any) {
    const { ctx } = chart;

    chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      meta.data.forEach((bar: any, index: number) => {
        const task = dataset.data[index];

        const centerX = (bar.base + bar.x) / 2;

        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '400 12px Poppins';

        ctx.fillStyle = '#000000';
        ctx.fillText(task.phase, centerX, bar.y + 24);

        ctx.fillStyle = '#6b7280';
        ctx.fillText(task.statusDate, centerX, bar.y + 40);

        ctx.restore();
      });
    });
  },
};

// ---------------- DOT CONNECTOR PLUGIN ----------------
export const circleNodePlugin = {
  id: 'circleNodePlugin',

  afterDatasetsDraw(chart: any) {
    const { ctx } = chart;

    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);

    ctx.save();

    for (let i = 0; i < meta.data.length - 1; i++) {
      const currentBar = meta.data[i];
      const nextBar = meta.data[i + 1];

      const currentTask = dataset.data[i];
      const nextTask = dataset.data[i + 1];

      if (currentTask.y === nextTask.y) {
        const circleX = (currentBar.x + nextBar.base) / 2;
        const circleY = currentBar.y;

        ctx.beginPath();
        ctx.arc(circleX, circleY, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#E5E7EB';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(circleX, circleY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#212121';
        ctx.fill();
      }
    }

    ctx.restore();
  },
};

export const xAxisBackgroundPlugin = {
  id: 'xAxisBackground',

  beforeDraw(chart: any) {
    const { ctx, chartArea, scales } = chart;
    const xAxis = scales.x;

    ctx.save();

    // draw background under x-axis ticks
    ctx.fillStyle = '#f3f4f6';

    ctx.fillRect(
      chartArea.left - 8,
      xAxis.top,
      chartArea.right + 8 - chartArea.left,
      xAxis.height,
    );

    ctx.restore();
  },
};

// todayLine
export const todayLine = {
  id: 'todayLine',

  afterDatasetDraw(chart: any) {
    const label = `Today ${format(new Date(), 'dd MMM')}`;

    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x },
    } = chart;

    const xPos = x.getPixelForValue(new Date());

    ctx.save();

    // Vertical line
    ctx.beginPath();

    ctx.lineWidth = 2;

    ctx.strokeStyle = '#212121';

    ctx.setLineDash([6, 6]);

    ctx.moveTo(xPos, top);

    ctx.lineTo(xPos, bottom);

    ctx.stroke();

    // -----------------
    // Label background
    // -----------------

    ctx.font = '500 10px Poppins';

    const paddingX = 8;

    // const paddingY = 4;

    const radius = 10;

    const textWidth = ctx.measureText(label).width;

    const boxWidth = textWidth + paddingX * 2;

    const boxHeight = 20;

    const boxX = xPos - boxWidth / 2;

    const boxY = top - 10;
    // Background
    ctx.beginPath();

    ctx.fillStyle = '#212121';

    ctx.roundRect(boxX, boxY, boxWidth, boxHeight, radius);

    ctx.fill();

    // Text
    ctx.fillStyle = '#ffffff';

    ctx.textAlign = 'center';

    ctx.textBaseline = 'middle';

    ctx.fillText(label, xPos, boxY + boxHeight / 2);

    ctx.restore();
  },
};

// export const alternateRowPlugin = {
//   id: 'alternateRowPlugin',

//   beforeDraw(chart) {
//     const { ctx, chartArea, scales } = chart;

//     const y = scales.y;

//     ctx.save();

//     y.ticks.forEach((_, index) => {
//       const yPos = y.getPixelForTick(index);

//       const rowHeight =
//         index < y.ticks.length - 1
//           ? y.getPixelForTick(index + 1) - yPos
//           : y.getPixelForTick(index) - y.getPixelForTick(index - 1);

//       ctx.fillStyle = index % 2 === 0 ? '#ffffff' : '#f3f4f6';

//       ctx.fillRect(
//         chartArea.left,
//         yPos - rowHeight / 2,
//         chartArea.right - chartArea.left,
//         rowHeight,
//       );
//     });

//     ctx.restore();
//   },
// };
