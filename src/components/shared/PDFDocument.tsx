import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { Question } from '../../pages/services/ADHDtest/ADHDtestMain';
import { questions } from '../../pages/services/ADHDtest/ADHDtestMain';

interface CategoryScore {
  attention: number;
  impulse: number;
  execution: number;
}

interface ScoreLevel {
  level: '정상' | '경계선' | '주의요망';
  description: string;
}

interface PDFDocumentProps {
  answers: { [key: number]: string };
  scores: CategoryScore;
  levels: {
    attention: ScoreLevel;
    impulse: ScoreLevel;
    execution: ScoreLevel;
  };
  chartImage: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6b21a8',
    fontWeight: 'bold',
  },
  section: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: '#6b21a8',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  labelColumn: {
    width: '30%',
    fontWeight: 'bold',
  },
  valueColumn: {
    width: '70%',
  },
  chartContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  chart: {
    width: 350,
    height: 240,
  },
  scoreSection: {
    marginBottom: 15,
  },
  scoreHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scoreDescription: {
    marginBottom: 5,
  },
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: 'center',
    color: '#6b7280',
  },
});

const PDFDocument: React.FC<PDFDocumentProps> = ({ answers, scores, levels, chartImage }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>ADHD 자가진단 결과</Text>
        
        <View style={styles.section}>
          <Text style={styles.subHeader}>점수 요약</Text>
          
          <View style={styles.chartContainer}>
            {chartImage && <Image src={chartImage} style={styles.chart} />}
          </View>
          
          <View style={styles.scoreSection}>
            <Text style={styles.scoreHeader}>주의력: {scores.attention}점 ({levels.attention.level})</Text>
            <Text style={styles.scoreDescription}>{levels.attention.description}</Text>
          </View>
          
          <View style={styles.scoreSection}>
            <Text style={styles.scoreHeader}>충동성: {scores.impulse}점 ({levels.impulse.level})</Text>
            <Text style={styles.scoreDescription}>{levels.impulse.description}</Text>
          </View>
          
          <View style={styles.scoreSection}>
            <Text style={styles.scoreHeader}>실행기능: {scores.execution}점 ({levels.execution.level})</Text>
            <Text style={styles.scoreDescription}>{levels.execution.description}</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.subHeader}>종합 평가</Text>
          <Text>
            {scores.attention > 60 || scores.impulse > 60 || scores.execution < 40
              ? "테스트 결과 주의가 필요한 영역이 있습니다. 일상생활에서 어려움을 겪고 계시다면 전문가와 상담해보시는 것을 권장드립니다."
              : scores.attention > 30 || scores.impulse > 30 || scores.execution < 70
              ? "테스트 결과 경계선 수준의 영역이 있습니다. 해당 영역에 대한 자기관리와 훈련이 도움이 될 수 있습니다."
              : "테스트 결과 모든 영역이 정상 수준입니다. 현재의 상태를 잘 유지하시기 바랍니다."
            }
          </Text>
        </View>
        
        <Text style={styles.footer}>
          이 보고서는 자가진단 결과이며, 정확한 진단을 위해서는 전문의와 상담하시기 바랍니다.
        </Text>
      </Page>
    </Document>
  );
};

export default PDFDocument; 