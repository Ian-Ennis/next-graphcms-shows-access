import Layout from "@c/Layout";
import { Grid, Card } from "@c/Grid";
import { Title } from "@c/Title";
import {
  getAllShowsByStartTimeAsc,
  getAllShowsByStartTimeDesc,
  getAllShowsByTitleAsc,
  getAllShowsByTitleDesc,
} from "@l/graphcms";
import { useState } from 'react'

export default function Shows({ showsEarlier, showsLater, showsAlphabetized, showsReverseAlphabetized }) {
  
  /* Added feature to sort shows (continued from graphcms.js): Added a <select /> menu 
      to the UI for user sort order selection, making use of component state
      to store and render the sorted server data. I thought this looked a bit 
      better on the UI over <button /> elements; less clutter, and a bit more intuitive. 
  */

  const [showSortOrder, setShowSortOrder] = useState(showsEarlier)

  console.log("showSortOrder:", showSortOrder)

  function sortShows(e, target) {
    e.preventDefault();

    if (target === "titleAlpha") {
      setShowSortOrder(showsAlphabetized)
    }
    if (target === "titleReverseAlpha") {
      setShowSortOrder(showsReverseAlphabetized)
    }
    if (target === "dateEarlier") {
      setShowSortOrder(showsEarlier)
    }
    if (target === "dateLater") {
      setShowSortOrder(showsLater)
    }
  }

  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>
      <select name="showsDropdown" onChange={(e) => sortShows(e, e.target.value)}>
        <option value="">Sort shows by..</option>
        <option value="titleAlpha">Title (Alphabetical)</option>
        <option value="titleReverseAlpha">Title (Reverse Alphabetical)</option>
        <option value="dateEarlier">Date (Chronological)</option>
        <option value="dateLater">Date (Reverse Chronological)</option>
      </select>
      <Grid>
        {showSortOrder.map((show) => (
          <Card href={`/show/${show.slug}`} header={show.title} key={show.id}>
            <p>{show.artists.map(({ fullName }) => fullName).join(", ")}</p>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const showsEarlier = (await getAllShowsByStartTimeAsc()) || [];
  const showsLater = (await getAllShowsByStartTimeDesc()) || [];
  const showsAlphabetized = (await getAllShowsByTitleAsc()) || [];
  const showsReverseAlphabetized = (await getAllShowsByTitleDesc()) || []
  return {
    props: { showsEarlier, showsLater, showsAlphabetized, showsReverseAlphabetized },
  };
}
