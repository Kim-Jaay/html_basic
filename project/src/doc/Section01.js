import '../css/section01.css'

const Section01 = () => {
    return (
        <section className="about">
            <h2><span className="c_b">CEO's </span>GREETINGS</h2>
            <p>Korea No.1 캐릭터, 카카오프렌즈</p>
            <div className="container">
                <div className="des">
                    <p className="tit">
                        전국민의 감정을 대변하며 성장한
                        <span className="mainColor">카카오프렌즈</span>는<br />
                        <span className="mainColor">글로벌 캐릭터</span>로 나아가고 있습니다.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero optio officiis,<br />
                        dignissimos
                        esse alias impedit maxime inventore incidunt consectetur id numquam<br /> iusto cumque,
                        corrupti,
                        provident voluptatem laboriosam mollitia blanditiis?</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur inventore<br /> sed
                        perferendis,
                        laboriosam vero, maiores perspiciatis obcaecati fugiat ex nam,<br /> reiciendis
                        accusantium ipsum a.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit doloribus voluptate, nisi
                        nihil harum quidem.</p>

                    <p>카카오프렌즈 일동</p>
                </div>
                <figure>
                    <img src="./img/DM_20220801165606_001.jpg" alt="" />
                </figure>
            </div>

            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive_table">
                    <table className="table">
                        <tr>
                            <th>주 소</th>
                            <td>부산시 연제구 연제로21 연제힐스테이트 101동 304호</td>
                        </tr>

                        <tr>
                            <th>전화번호</th>
                            <td>010-7578-8546</td>
                        </tr>
                    </table>
                </div>

            </div>

        </section>
    )
}

export default Section01;