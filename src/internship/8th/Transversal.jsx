import '../../App.css'
import { httpClient } from '../../util/httpClient'

export default function App() {
  const request = () => {
    httpClient.fetch('todos', {
      // Authorization, 인증, 횡단 관심사를 처리
      // 이걸 어떻게 잘 처리할 수 있을까?
      headers: {
        Authorization: 'ACCESS_TOKEN'
      }
    })

    // 통신할 때 마다 해야 하는 동작을 하나의 모듈에서 처리하고 싶다.

    // 함수
    // 함수: 코드의 조각 -> 필요할 때마다 재사용 할 수 있는 형태 (프로그래밍에서의 함수)
    // 순수 함수: input -> output (동일한..), 함수를 파이프라인 처럼 쓸 수 있는 형태
    // f(x) => x + 1
    // input -> output -> output -> output
    // 호출하고 끝..

    // 클래스
    // 코드의 조각, 필요할 때 클래스는 Object 형태로 만들어서 사용할 수 있다.
    // 상태(state) -> property -> member variables
    // 동작 -> function() -> method
    // 한 번 만들어놓으면 유지되면서 변수를 관리할 수 있다.
    // state, method

    // 횡단 관심사
    // Authorization
    // baseURL 설정해주는 것

    // 매 요청마다 Authorization header에 token 넣어주기
    // baseURL 설정해주는 것, 자동으로 앞에 넣어주기

    // baseURL이라는 상태를 기억하고 언제든지 토큰을 꺼내와서 쓸 수 있는 형태.. 그래서 클래스가 적합..?
  }

  return (
    <>
      <h1>Cross Cutting Concerns</h1>
      <button onClick={request}>request</button>
    </>
  )
}
