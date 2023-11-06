class HRReportGenerator {
  constructor() {
    this.contracts = [];
  }

  addContract(start_time, end_time, is_permanent = true) {
    this.contracts.push({
      start_time: new Date(start_time),
      end_time: end_time ? new Date(end_time) : null,
      is_permanent: is_permanent,
    });
  }

  generateReport(report_start, report_end) {
    report_start = new Date(report_start);
    report_end = new Date(report_end);

    let time_periods = [];
    for (let contract of this.contracts) {
      if (
        contract.start_time <= report_end &&
        (!contract.end_time || contract.end_time >= report_start)
      ) {
        time_periods.push([
          new Date(Math.max(report_start, contract.start_time)).toISOString(),
          new Date(
            Math.min(report_end, contract.end_time || report_end)
          ).toISOString(),
        ]);
      }
    }
    return time_periods;
  }
}

// Sample usage
const reportGen = new HRReportGenerator();

// Adding the given contracts
const contracts = [
  ['2022-05-07T19:00:00-03:00', '2022-06-22T12:00:00-10:00'],
  ['2022-08-20T10:00:00+12:00', '2022-08-31T20:00:00+04:00'],
  ['2022-07-20T06:00:00+08:00', '2022-08-06T22:00:00+00:00'],
  ['2023-04-11T22:00:00+00:00', null],
  ['2022-09-10T20:00:00+04:00', '2023-04-02T02:00:00+04:00'],
  ['2023-04-02T02:00:00+04:00', '2023-04-11T22:00:00+00:00'],
];

for (let contract of contracts) {
  reportGen.addContract(...contract);
}

// Generating the report
const time_periods = reportGen.generateReport(
  '2022-07-27T00:00:00+02:00',
  '2023-05-05T00:00:00+02:00'
);
console.log(time_periods);
