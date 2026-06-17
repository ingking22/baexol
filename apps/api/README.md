# BAEXOL API

FastAPI 백엔드 — **Hexagonal Architecture (Ports & Adapters)**.

## 계층 구조

```
src/baexol_api/
├── domain/                 # 가장 안쪽. 외부 의존 0.
│   ├── entities/           #   순수 비즈니스 모델 (Project ...)
│   └── ports/              #   추상 인터페이스 (ProjectRepository ...)
├── application/            # 유스케이스. 포트에만 의존.
│   └── use_cases/          #   ListProjects ...
├── adapters/               # 바깥쪽. 프레임워크/인프라 의존 허용.
│   ├── inbound/http/       #   HTTP 라우터 (FastAPI)
│   └── outbound/           #   포트 구현체 (repositories ...)
└── main.py                 # composition root — 어댑터를 포트에 주입
```

**의존 방향**: `adapters → application → domain` (안쪽으로만). 도메인은 바깥을 모른다(DIP).

## 실행

```bash
pip install -e ".[dev]"
uvicorn baexol_api.main:app --reload
# Swagger UI: http://localhost:8000/docs
# Health:     http://localhost:8000/health
```
