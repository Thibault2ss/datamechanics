import React from 'react'
import moment from 'moment'
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ISparkApp } from 'store/spark_apps/types'
import ServerIcon from 'components/Common/Icons/Common/Server'
import Close from 'components/Common/Icons/Common/Close'
import { SparkAppStateColor } from 'store/spark_apps/types'
import { deleteSparkApp } from 'store/spark_apps/actions'
import titleCase from 'utils/titleCase'
import { useHistory } from "react-router-dom";

const CloseButton = styled.div`
  opacity: 0;
  transition: opacity 0.2s linear;
  fill: grey;
  padding: 4px;
  &:hover svg {
    fill: #171725;
  }
`

const Wrapper = styled.div`
  width: 265px;
  min-width: 235px;
  height: 110px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);
    transform: scale(1.02);
  }
  &:hover ${CloseButton} {
    opacity: 1;
  }
  @media (max-width: 1600px) {
    margin-bottom: 10px;
  }
  @media (max-width: 800px) {
    margin-right: 0;
  }
  @media (max-width: 450px) {
    padding: 10px;
  }
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 30px auto 20px;
  column-gap: 20px;
  margin-bottom: 40px;
`

const AppName = styled.span`
  display: grid;
  align-items: center;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #171725;
`

const DurationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const DateWrapper = styled.div`
  font-size: 0.6em;
`

const Date = styled.span`
  font-size: 1.2em;
  color: #cccccc;
`

const Duration = styled.span`
  color: ${props => props.color};
  font-size: 0.9em;
`
const Executor = styled.div`
  background-color: ${props => props.color};
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 1px;
  border-radius: 5px;
`
const ExecutorWrapper = styled.div`
  font-size: 0.6em;
`

interface Props {
  deleteSparkApp: typeof deleteSparkApp,
  app: ISparkApp,
  disableLink?: boolean,
}

const SparkAppCard: React.FC<Props> = props => {
  const {
    deleteSparkApp,
    disableLink,
    app: {
      appName,
      jobName,
      status: {
        lastSubmissionAttemptTime,
        terminationTime,
        executorState,
        applicationState: {
          state
        },
     }
    }
  } = props;
  const history = useHistory();

  const statusColor = SparkAppStateColor[state] || "#000";
  const submittedDate = moment(lastSubmissionAttemptTime);
  const terminationDate = terminationTime ? moment(terminationTime): null;
  const duration = terminationDate ? moment.duration(terminationDate.diff(submittedDate)).asMinutes().toFixed(0) : null;

  const executors = executorState ? Object.entries(executorState).map(([id, status]) =>
    <Executor data-tip={titleCase(status)} key={id} color={SparkAppStateColor[status]}></Executor>
  ) : [];

  function navToApp(id: string) {
    if (disableLink) return;
    history.push(`apps/${id}`);
  }

  return (
    <Wrapper onClick={() => navToApp(appName)}>
      <Header>
        <div data-tip={titleCase(state)}><ServerIcon color={statusColor}></ServerIcon></div>
        <AppName>{jobName}</AppName>
        <CloseButton onClick={() => deleteSparkApp(appName)}><Close></Close></CloseButton>
      </Header>
      <ExecutorWrapper>Executors {executors}</ExecutorWrapper>
      <DurationWrapper>
        <div style={{flex: '1 0 auto'}}>
          <DateWrapper>
            submitted:
            <Date> {submittedDate.format('MMM Do, h:mm a')}</Date>
          </DateWrapper>
          
          <DateWrapper>
            ended:
            {terminationDate && 
            <Date> {terminationDate.format('MMM Do, h:mm a')}</Date>}
          </DateWrapper>
          </div>
          {duration && <Duration color={statusColor}>{duration} min</Duration>}
      </DurationWrapper>
      <ReactTooltip/>
    </Wrapper>
  )
}

export default connect(
  () => ({}),
  { deleteSparkApp: deleteSparkApp }
)(SparkAppCard)
