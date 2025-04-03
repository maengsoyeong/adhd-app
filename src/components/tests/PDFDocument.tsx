import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// 폰트 등록
Font.register({
  family: 'Pretendard',
  src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
});

// 스타일 정의
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Pretendard',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  resultBox: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#F9FAFB',
    borderRadius: 5,
  },
  resultScore: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 10,
  },
  resultLevel: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  resultDescription: {
    fontSize: 12,
    marginTop: 10,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginVertical: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#F3F4F6',
    padding: 5,
  },
  tableCell: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  narrowCell: {
    width: '10%',
  },
  wideCell: {
    width: '60%',
  },
  mediumCell: {
    width: '20%',
  },
  smallCell: {
    width: '10%',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    textAlign: 'center',
    color: '#6B7280',
  },
  caution: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#FEF3C7',
    borderRadius: 5,
  },
  cautionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cautionText: {
    fontSize: 10,
  },
});

// 인터페이스 정의
interface PDFDocumentProps {
  title: string;
  userName?: string;
  userAge?: string;
  userGender?: string;
  score: number;
  maxScore: number;
  resultLevel: string;
  resultDescription: string;
  questions: { id: number; text: string }[];
  answers: number[];
  options: { value: number; label: string }[];
}

// PDF 문서 컴포넌트
const PDFDocument: React.FC<PDFDocumentProps> = ({
  title,
  userName,
  userAge,
  userGender,
  score,
  maxScore,
  resultLevel,
  resultDescription,
  questions,
  answers,
  options,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* 제목 */}
      <Text style={styles.title}>{title}</Text>
      
      {/* 검사 정보 */}
      <View style={styles.section}>
        <Text style={styles.text}>검사일: {new Date().toLocaleDateString()}</Text>
        {userName && <Text style={styles.text}>이름: {userName}</Text>}
        {userAge && <Text style={styles.text}>나이: {userAge}세</Text>}
        {userGender && <Text style={styles.text}>성별: {userGender}</Text>}
      </View>
      
      {/* 결과 요약 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>검사 결과 요약</Text>
        <View style={styles.resultBox}>
          <Text style={styles.resultScore}>
            {score} / {maxScore}
          </Text>
          <Text style={styles.resultLevel}>{resultLevel}</Text>
          <Text style={styles.resultDescription}>{resultDescription}</Text>
        </View>
      </View>
      
      {/* 문항별 응답 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>문항별 응답</Text>
        <View style={styles.table}>
          {/* 테이블 헤더 */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, styles.narrowCell, styles.bold]}>번호</Text>
            <Text style={[styles.tableCell, styles.wideCell, styles.bold]}>문항</Text>
            <Text style={[styles.tableCell, styles.mediumCell, styles.bold]}>응답</Text>
            <Text style={[styles.tableCell, styles.smallCell, styles.bold]}>점수</Text>
          </View>
          
          {/* 테이블 내용 */}
          {questions.map((question, index) => (
            <View key={question.id} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.narrowCell]}>{index + 1}</Text>
              <Text style={[styles.tableCell, styles.wideCell]}>{question.text}</Text>
              <Text style={[styles.tableCell, styles.mediumCell]}>
                {answers[index] >= 0 ? options[answers[index]].label : '응답 없음'}
              </Text>
              <Text style={[styles.tableCell, styles.smallCell]}>
                {answers[index] >= 0 ? answers[index] : '-'}
              </Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* 주의사항 */}
      <View style={styles.caution}>
        <Text style={styles.cautionTitle}>주의사항</Text>
        <Text style={styles.cautionText}>
          이 검사 결과는 참고용으로만 활용하시고, 정확한 진단과 치료를 위해서는 반드시 전문가와 상담하시기 바랍니다.
          심각한 증상이 있거나 일상생활에 어려움을 겪고 있다면 즉시 전문가의 도움을 받으세요.
        </Text>
      </View>
      
      {/* 푸터 */}
      <Text style={styles.footer}>
        © {new Date().getFullYear()} 퍼즐핏 - 모든 권리 보유
      </Text>
    </Page>
  </Document>
);

export default PDFDocument; 