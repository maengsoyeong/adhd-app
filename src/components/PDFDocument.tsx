import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { questions } from '../pages/SurveyTest';

// 한글 폰트 등록
Font.register({
  family: 'Nanum Gothic',
  src: 'https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf'
});

// 또는 로컬 폰트 사용 시
Font.register({
  family: 'Nanum Gothic',
  src: '/fonts/NanumGothic-Regular.ttf'  // public 폴더에 위치
});

// 공통 스타일 정의
const commonStyles = {
  text: {
    fontFamily: 'Nanum Gothic'
  }
};

// PDF 스타일 정의
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    ...commonStyles.text
  },
  title: {
    ...commonStyles.text,
    fontSize: 24,
    marginBottom: 20,
    color: '#6B21A8',
    textAlign: 'center'
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#F9FAFB',
    borderRadius: 8
  },
  sectionTitle: {
    ...commonStyles.text,
    fontSize: 18,
    marginBottom: 10,
    color: '#6B21A8'
  },
  categoryTitle: {
    ...commonStyles.text,
    fontSize: 14,
    marginBottom: 5,
    color: '#4B5563'
  },
  scoreText: {
    ...commonStyles.text,
    fontSize: 12,
    marginBottom: 5,
    color: '#374151'
  },
  description: {
    ...commonStyles.text,
    fontSize: 12,
    color: '#6B7280',
    marginTop: 5
  },
  summarySection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F3E8FF',
    borderRadius: 8
  },
  chartSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    alignItems: 'center'
  },
  chartImage: {
    width: '400',
    height: '300'
  }
});

interface PDFDocumentProps {
  answers: { [key: number]: string };
  scores: {
    attention: number;
    impulse: number;
    execution: number;
  };
  levels: {
    attention: { level: string; description: string };
    impulse: { level: string; description: string };
    execution: { level: string; description: string };
  };
  chartImage: string;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ answers, scores, levels, chartImage }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>ADHD 테스트 결과</Text>

      {/* 차트 섹션 */}
      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>점수 분포</Text>
        {chartImage && (
          <Image
            style={styles.chartImage}
            src={chartImage}
          />
        )}
      </View>

      {/* 상세 분석 섹션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>상세 분석</Text>

        {/* 주의력 */}
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.categoryTitle}>주의력</Text>
          <Text style={styles.scoreText}>
            점수: {scores.attention}/100 (수준: {levels.attention.level})
          </Text>
          <Text style={styles.description}>{levels.attention.description}</Text>
        </View>

        {/* 충동성 */}
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.categoryTitle}>충동성</Text>
          <Text style={styles.scoreText}>
            점수: {scores.impulse}/100 (수준: {levels.impulse.level})
          </Text>
          <Text style={styles.description}>{levels.impulse.description}</Text>
        </View>

        {/* 실행기능 */}
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.categoryTitle}>실행기능</Text>
          <Text style={styles.scoreText}>
            점수: {scores.execution}/100 (수준: {levels.execution.level})
          </Text>
          <Text style={styles.description}>{levels.execution.description}</Text>
        </View>
      </View>

      {/* 종합 평가 */}
      <View style={styles.summarySection}>
        <Text style={styles.sectionTitle}>종합 평가</Text>
        <Text style={styles.description}>
          {scores.attention > 60 || scores.impulse > 60 || scores.execution < 40 ? (
            "테스트 결과 주의가 필요한 영역이 있습니다. 일상생활에서 어려움을 겪고 계시다면 전문가와 상담해보시는 것을 권장드립니다."
          ) : scores.attention > 30 || scores.impulse > 30 || scores.execution < 70 ? (
            "테스트 결과 경계선 수준의 영역이 있습니다. 해당 영역에 대한 자기관리와 훈련이 도움이 될 수 있습니다."
          ) : (
            "테스트 결과 모든 영역이 정상 수준입니다. 현재의 상태를 잘 유지하시기 바랍니다."
          )}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument; 