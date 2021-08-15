import React from 'react';
import Layout from "../components/layout";
import ReservationForm from "../components/reservation-form";

const Reservations = () => {
  return (
    <Layout>

      <section className="section">
        <h2 className="title-left">??????</h2>
        <ReservationForm></ReservationForm>
      </section>

    </Layout>
  );
};

export default Reservations;