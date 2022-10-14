export default function ReviewForm() {
  return (
    <div className="col-lg-12">
      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="sspd_review">
              <li className="list-inline-item">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-star"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-star"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-star"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-star"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-star"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="list-inline-item review_rating_para">
                Your Rating & Review
              </li>
            </ul>
            <form className="comments_form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="textHelp"
                  placeholder="Review Title"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={12}
                  placeholder="Your Review"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-thm">
                Submit Review <span className="flaticon-right-arrow-1"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
