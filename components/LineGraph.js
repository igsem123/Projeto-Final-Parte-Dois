import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts"
const LineGraph = () => {
  const lineData = [
      {value: 0, dataPointText: '0'},
      {value: 20, dataPointText: '20'},
      {value: 18, dataPointText: '15'},
      {value: 40, dataPointText: '40'},
      {value: 36, dataPointText: '36'},
      {value: 60, dataPointText: '60'},
      {value: 54, dataPointText: '54'},
      {value: 85, dataPointText: '85'}
  ];
  return (
      <View style={{backgroundColor: '#fff'}}>
          <LineChart
              initialSpacing={0}
              data={lineData}
              spacing={30}
              textColor1="#000000"
              textShiftY={-8}
              textShiftX={-10}
              textFontSize={13}
              thickness={4}
              hideYAxisText
              yAxisColor="#000000"
              showVerticalLines
              verticalLinesColor="transparent"
              xAxisColor="#000000"
              color="#000000"
              curved
              dataPointsColor={'red'}
              dataPointsRadius={5}
          />
      </View>
  );
};

export default LineGraph;