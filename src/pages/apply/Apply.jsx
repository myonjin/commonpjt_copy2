import { useState, useEffect, forwardRef } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Container,
  FormControl,
  OutlinedInput,
  Select,
} from "@mui/material";
import { IMaskInput } from "react-imask";
import axios from "axios";
import plusButton from "../../assets/image/plusButton.png";

const SERVER_URL = "http://localhost:4000/api/positionCode";

const TextMaskCustomPhone = forwardRef(function TextMaskCustomPhone(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="010-0000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

function Apply() {
  const [positionList, setPositionList] = useState([]);

  const [phone, setPhone] = useState({
    textmask: "000-0000-0000",
  });
  // textmask 에 기본값으로 user axios get

  const phonehandleChange = (event) => {
    setPhone({
      ...phone,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async () => {
    const res = await axios.get(SERVER_URL);
    setPositionList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const a = (d) => {
    console.log(d);
  };

  return (
    <Container maxWidth="md">
      <div>
        <div>
          {/* 프로젝트 이름 */}
          <div>
            <div>이름</div>
            <TextField
              id="outlined-disabled"
              variant="outlined"
              defaultValue="나유진"
              // defaultValue => axio user get {name}
            />
          </div>
          {/* 전화번호 & 이메일 입력 */}
          <div>
            <div>
              <p>전화번호 </p>
              <FormControl variant="standard">
                <OutlinedInput
                  value={phone.textmask}
                  onChange={phonehandleChange}
                  name="textmask"
                  id="outlined-formatted-text-mask-input"
                  inputComponent={TextMaskCustomPhone}
                />
              </FormControl>
            </div>
            <div>
              <p>이메일</p>
              <TextField
                id="outlined-disabled"
                variant="outlined"
                defaultValue="signal@signal.com"
                // defaultValue => axio user get {email}
              />
            </div>
          </div>
          {/* //전화번호 & 이메일 입력 */}

          <div>
            <div>
              <p>원하는 포지션</p>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select value={"defaultPositon"} displayEmpty>
                  {/* <MenuItem value="aaa"> </MenuItem> */}
                  {/* {a()} */}
                  {/* {a(typeof positionList)} */}
                  {positionList.map(({ name, code }, index) => (
                    <MenuItem value={name}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <div>
              <p>사용기술</p>
              {/* autoComplete */}
            </div>
            <div>
              <p>화상미팅 예약</p>
              <Button variant="contained">시간선택 </Button>
              {/*  select된 list */}
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>경력</p>
                <img src={plusButton} alt="plusButton" />
                {/* plusButtonImage */}
              </div>
              <div>{/* careerList */}</div>
            </div>
            <div>
              <div>
                <p>경험</p>
                <img src={plusButton} alt="plusButton" />

                {/* plusButtonImage */}
              </div>
              <div>{/* expList */}</div>
            </div>
          </div>
          <div>
            <p>하고싶은 말</p>
            <div>
              <TextField
                id="outlined-textarea"
                label="하고싶은 말"
                placeholder="성실하게 프로젝트  할 팀원 구합니다!!!"
                multiline
              />
            </div>
          </div>
          <div>
            <p>지원자에게 궁금한 점</p>
            {/* 반복 */}
            <div>
              <TextField
                id="outlined-textarea"
                label="질문"
                placeholder="관심있는 분아갸 무엇인가요?"
                multiline
              />
            </div>
          </div>
        </div>
        <div>
          <Button variant="contained">지원하기</Button>
        </div>
      </div>
    </Container>
  );
}
export default Apply;
