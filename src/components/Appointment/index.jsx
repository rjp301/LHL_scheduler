import React from "react"
import './styles.scss';

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  
  const { time, interview, interviewers, bookInterview, id } = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          id={id}
          interviewers={interviewers}
          onSave={() => transition(SHOW)}
          onCancel={() => back()}
          bookInterview={bookInterview}
        />
      )}

    </article>
  )
}