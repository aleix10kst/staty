import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import caLocale from '@fullcalendar/core/locales/ca';
import esLocale from '@fullcalendar/core/locales/es';

/* eslint-disable-next-line */
export interface PublicFixturesProps {}

export function PublicFixtures(props: PublicFixturesProps) {
  return (
    <div className="">
      <h1 className="text-3xl text-gray-700 font-bold">Partits</h1>
      <FullCalendar
        plugins={[dayGridPlugin, iCalendarPlugin]}
        initialView="dayGridMonth"
        locales={[caLocale, esLocale]}
        locale="ca"
        events={{ url: '/assets/uni-girona-calendar-2022.ics', format: 'ics' }}
      />
    </div>
  );
}

export default PublicFixtures;
